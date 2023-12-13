/* eslint-disable @angular-eslint/no-output-on-prefix */
import { AnimationEvent } from '@angular/animations';
import {
  FocusMonitor,
  FocusOrigin,
  FocusTrap,
  FocusTrapFactory,
  InteractivityChecker,
} from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ANIMATION_MODULE_TYPE,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
  isDevMode,
} from '@angular/core';
import { fromEvent, merge, Observable, Subject, Subscription } from 'rxjs';
import {
  filter,
  map,
  take,
  takeUntil,
  distinctUntilChanged,
  mapTo,
  debounceTime,
  startWith,
} from 'rxjs/operators';
import { cccDrawerAnimations } from './drawer-animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  CdkScrollable,
  ScrollDispatcher,
  ViewportRuler,
} from '@angular/cdk/scrolling';
import { Directionality } from '@angular/cdk/bidi';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

export function throwMatDuplicatedDrawerError(position: string) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}

export type AutoFocusTarget = 'dialog' | 'first-tabbable' | 'first-heading';

export type DrawerToggleResult = 'open' | 'close';

/** Drawer and SideNav display modes. */
export type DrawerMode = 'over' | 'push' | 'side';

export const CCC_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken<boolean>(
  'CCC_DRAWER_DEFAULT_AUTOSIZE',
  {
    providedIn: 'root',
    factory: CCC_DRAWER_DEFAULT_AUTOSIZE_FACTORY,
  }
);

export const CCC_DRAWER_CONTAINER = new InjectionToken('MAT_DRAWER_CONTAINER');

export function CCC_DRAWER_DEFAULT_AUTOSIZE_FACTORY(): boolean {
  return false;
}

@Component({
  selector: 'ccc-drawer-content',
  template: '<main><ng-content></ng-content></main>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CdkScrollable,
      useExisting: CCCDrawerContentComponent,
    },
  ],
})
export class CCCDrawerContentComponent
  extends CdkScrollable
  implements AfterContentInit
{
  @HostBinding('attr.ngSkipHydration') ngSkipHydrationAttribute = '';
  @HostBinding('class') get content() {
    return 'ccc-drawer-content';
  }
  @HostBinding('style.margin-left.px') get contentMarginLeft() {
    return this.container.contentMargins.left;
  }
  @HostBinding('style.margin-right.px') get contentMarginRight() {
    return this.container.contentMargins.right;
  }

  constructor(
    private cdRef: ChangeDetectorRef,
    @Inject(forwardRef(() => CCCDrawerContainerComponent))
    public container: CCCDrawerContainerComponent,
    elementRef: ElementRef<HTMLElement>,
    scrollDispatcher: ScrollDispatcher,
    ngZone: NgZone
  ) {
    super(elementRef, scrollDispatcher, ngZone);
  }

  ngAfterContentInit() {
    this.container.contentMarginChanges.subscribe(() => {
      this.cdRef.markForCheck();
    });
  }
}

@Component({
  selector: 'ccc-drawer',
  exportAs: 'cccDrawer',
  templateUrl: './ccc-drawer.component.html',
  animations: [cccDrawerAnimations.transformDrawer],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[@transform]': 'animationState',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CCCDrawerComponent
  implements AfterViewInit, AfterContentChecked, OnDestroy, OnChanges, OnInit
{
  animationState: 'open-instant' | 'open' | 'void' = 'void';

  @HostListener('@transform.start', ['$event']) onAnimationStarted(
    event: any
  ): void {
    this.animationStarted.next(event);
  }

  @HostListener('@transform.done', ['$event']) onAnimationEnd(
    event: any
  ): void {
    this.animationEnd.next(event);
  }
  @HostBinding('class.ccc-drawer') drawer = true;
  @HostBinding('attr.tabIndex') tabIndex = '-1';
  @HostBinding('attr.ngSkipHydration') ngSkipHydrationAttribute = '';

  private focusTrap?: FocusTrap;
  private elementFocusedBeforeDrawerWasOpened: HTMLElement | null = null;
  @Input() showHeader = true;
  @Input() sideNavBackgroundClass = 'bg-body';

  @HostBinding('class.ccc-drawer-opened') get drawerState() {
    return this.opened;
  }

  @HostBinding('class.ccc-sidenav-minimize') get minimizeDrawer() {
    return this.minimize && !this.deviceDisplayIsSmall();
  }

  @HostBinding('class.ccc-drawer-end') get drawerPosition() {
    return this.position === 'end';
  }
  @HostBinding('class') get drawerMode() {
    switch (this.mode) {
      case 'over':
        return 'ccc-drawer-over';
      case 'push':
        return 'ccc-drawer-push';
      case 'side':
        return 'ccc-drawer-side';
      default:
        return 'ccc-drawer-over';
    }
  }

  private routerNavigationSubscription = new Subscription();
  collapseMobileSideBarOnNavigating(
    routerNavigationStartEvent$: Observable<boolean>
  ) {
    this.routerNavigationSubscription = routerNavigationStartEvent$.subscribe(
      () => {
        if (this.deviceDisplayIsSmall()) {
          this.close();
        }
      }
    );
  }

  /** Whether the drawer is initialized. Used for disabling the initial animation. */
  private enableAnimations = false;

  /** Whether the view of the component has been attached. */
  private isAttached = false;

  /** Anchor node used to restore the drawer to its initial position. */
  private anchor: Comment | null = null;
  @Input() sideNavColor?: 'light' | 'dark';

  @Input() openForLargeDisplay = false;

  /** The side that the drawer is attached to. */
  @Input()
  get position(): 'start' | 'end' {
    return this._position;
  }
  set position(value: 'start' | 'end') {
    // Make sure we have a valid value.
    value = value === 'end' ? 'end' : 'start';
    if (value !== this._position) {
      // Static inputs in Ivy are set before the element is in the DOM.
      if (this.isAttached) {
        this.updatePositionInParent(value);
      }

      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  private _position: 'start' | 'end' = 'start';

  /** Mode of the drawer; one of 'over', 'push' or 'side'. */
  @Input()
  get mode(): DrawerMode {
    return this._mode;
  }
  set mode(value: DrawerMode) {
    this._mode = value;
    this.updateFocusTrapState();
    this.modeChanged.next();
  }
  private _mode: DrawerMode = 'over';

  /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
  @Input()
  get disableClose(): boolean {
    return this._disableClose;
  }
  set disableClose(value: BooleanInput) {
    this._disableClose = coerceBooleanProperty(value);
  }
  private _disableClose = false;

  @Input()
  get autoFocus(): AutoFocusTarget | string | boolean {
    const value = this._autoFocus;

    if (value == null) {
      if (this.mode === 'side') {
        return 'dialog';
      } else {
        return 'first-tabbable';
      }
    }
    return value;
  }
  set autoFocus(value: AutoFocusTarget | string | BooleanInput) {
    if (value === 'true' || value === 'false' || value == null) {
      value = coerceBooleanProperty(value);
    }
    this._autoFocus = value;
  }
  private _autoFocus: AutoFocusTarget | string | boolean | undefined;

  @Input()
  get opened(): boolean {
    return this._opened;
  }
  set opened(value: BooleanInput) {
    this.toggle(coerceBooleanProperty(value));
  }
  private _opened = false;

  /** How the sidenav was opened (keypress, mouse click etc.) */
  private openedVia: FocusOrigin | null = null;

  /** Emits whenever the drawer has started animating. */
  readonly animationStarted = new Subject<AnimationEvent>();

  /** Emits whenever the drawer is done animating. */
  readonly animationEnd = new Subject<AnimationEvent>();

  /** Event emitted when the drawer open state is changed. */
  @Output() readonly openedChange: EventEmitter<boolean> =
    // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new EventEmitter<boolean>(/* isAsync */ true);

  /** Event emitted when the drawer has been opened. */
  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('opened')
  readonly openedStream = this.openedChange.pipe(
    filter((o) => o),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    map(() => {})
  );

  /** Event emitted when the drawer has started opening. */
  @Output()
  readonly openedStart: Observable<void> = this.animationStarted.pipe(
    filter((e) => e.fromState !== e.toState && e.toState.indexOf('open') === 0),
    mapTo(undefined)
  );

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('closed')
  readonly closedStream = this.openedChange.pipe(
    filter((o) => !o),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    map(() => {})
  );

  /** Event emitted when the drawer has started closing. */
  @Output()
  readonly closedStart: Observable<void> = this.animationStarted.pipe(
    filter((e) => e.fromState !== e.toState && e.toState === 'void'),
    mapTo(undefined)
  );

  /** Emits when the component is destroyed. */
  private readonly destroyed = new Subject<void>();

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('positionChanged') readonly onPositionChanged =
    new EventEmitter<void>();

  @ViewChild('content') content?: ElementRef<HTMLElement>;

  readonly modeChanged = new Subject<void>();

  minimize = false;
  toggleMinimize() {
    this.minimize = !this.minimize;
    setTimeout(() => {
      this.container?.updateContentMargins();
    }, 0);
  }
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private focusTrapFactory: FocusTrapFactory,
    private focusMonitor: FocusMonitor,
    private platform: Platform,
    private ngZone: NgZone,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private readonly interactivityChecker: InteractivityChecker,
    @Optional() @Inject(DOCUMENT) private doc: any,
    @Optional()
    @Inject(CCC_DRAWER_CONTAINER)
    public container?: CCCDrawerContainerComponent
  ) {
    this.openedChange.subscribe((opened: boolean) => {
      if (opened) {
        if (this.doc) {
          this.elementFocusedBeforeDrawerWasOpened = this.doc
            .activeElement as HTMLElement;
        }

        this.takeFocus();
      } else if (this.isFocusWithinDrawer()) {
        this.restoreFocus(this.openedVia || 'program');
      }
    });

    this.ngZone.runOutsideAngular(() => {
      (
        fromEvent(
          this.elementRef.nativeElement,
          'keydown'
        ) as Observable<KeyboardEvent>
      )
        .pipe(
          filter((event) => {
            return (
              event.keyCode === ESCAPE &&
              !this.disableClose &&
              !hasModifierKey(event)
            );
          }),
          takeUntil(this.destroyed)
        )
        .subscribe((event) =>
          this.ngZone.run(() => {
            this.close();
            event.stopPropagation();
            event.preventDefault();
          })
        );
    });

    this.animationEnd
      .pipe(
        distinctUntilChanged((x, y) => {
          return x.fromState === y.fromState && x.toState === y.toState;
        })
      )
      .subscribe((event: AnimationEvent) => {
        const { fromState, toState } = event;

        if (
          (toState.indexOf('open') === 0 && fromState === 'void') ||
          (toState === 'void' && fromState.indexOf('open') === 0)
        ) {
          this.openedChange.emit(this._opened);
        }
      });

    const routerNavigationEndEvent$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => true)
    );

    this.collapseMobileSideBarOnNavigating(routerNavigationEndEvent$);
  }
  ngOnInit(): void {
    if (this.openForLargeDisplay && !this.deviceDisplayIsSmall()) {
      this.open();
    }
    this.breakPointSubscription = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state) => {
        const displayIsLarge = !state.matches;
        if (this.openForLargeDisplay && displayIsLarge) {
          this.open();
        }
      });
  }

  @HostBinding('class') sideNavClasses = this.getSidenavClass();

  ngOnChanges(changes: SimpleChanges): void {
    this.sideNavClasses = this.getSidenavClass();
  }

  getSidenavClass() {
    let colorClass = '';
    if (this.sideNavColor === 'light') {
      colorClass = 'ccc-nav-color-light';
    }

    if (this.sideNavColor === 'dark') {
      colorClass = 'ccc-nav-color-dark';
    }

    return `${colorClass} ${this.sideNavBackgroundClass}`;
  }

  private forceFocus(element: HTMLElement, options?: FocusOptions) {
    if (!this.interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      // The tabindex attribute should be removed to avoid navigating to that element again
      this.ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener('blur', callback);
          element.removeEventListener('mousedown', callback);
          element.removeAttribute('tabindex');
        };

        element.addEventListener('blur', callback);
        element.addEventListener('mousedown', callback);
      });
    }
    element.focus(options);
  }

  private focusByCssSelector(selector: string, options?: FocusOptions) {
    const elementToFocus = this.elementRef.nativeElement.querySelector(
      selector
    ) as HTMLElement | null;
    if (elementToFocus) {
      this.forceFocus(elementToFocus, options);
    }
  }

  private takeFocus() {
    if (!this.focusTrap) {
      return;
    }

    const element = this.elementRef.nativeElement;

    switch (this.autoFocus) {
      case false:
      case 'dialog':
        return;
      case true:
      case 'first-tabbable':
        this.focusTrap.focusInitialElementWhenReady().then((hasMovedFocus) => {
          if (
            !hasMovedFocus &&
            typeof this.elementRef.nativeElement.focus === 'function'
          ) {
            element.focus();
          }
        });
        break;
      case 'first-heading':
        this.focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this.focusByCssSelector(this.autoFocus!);
        break;
    }
  }

  private restoreFocus(focusOrigin: Exclude<FocusOrigin, null>) {
    if (this.autoFocus === 'dialog') {
      return;
    }

    if (this.elementFocusedBeforeDrawerWasOpened) {
      this.focusMonitor.focusVia(
        this.elementFocusedBeforeDrawerWasOpened,
        focusOrigin
      );
    } else {
      this.elementRef.nativeElement.blur();
    }

    this.elementFocusedBeforeDrawerWasOpened = null;
  }

  /** Whether focus is currently within the drawer. */
  private isFocusWithinDrawer(): boolean {
    const activeEl = this.doc.activeElement;
    return !!activeEl && this.elementRef.nativeElement.contains(activeEl);
  }

  private breakPointSubscription = new Subscription();
  @ViewChild('navList') navList!: ElementRef;
  ngAfterViewInit() {
    this.isAttached = true;
    this.focusTrap = this.focusTrapFactory.create(
      this.elementRef.nativeElement
    );
    this.updateFocusTrapState();

    if (this._position === 'end') {
      this.updatePositionInParent('end');
    }
  }

  ngAfterContentChecked() {
    if (this.platform.isBrowser) {
      this.enableAnimations = true;
    }
  }

  ngOnDestroy() {
    if (this.focusTrap) {
      this.focusTrap.destroy();
    }

    this.anchor?.remove();
    this.anchor = null;
    this.animationStarted.complete();
    this.animationEnd.complete();
    this.modeChanged.complete();
    this.destroyed.next();
    this.destroyed.complete();
    this.breakPointSubscription.unsubscribe();
    this.routerNavigationSubscription.unsubscribe();
  }
  open(openedVia?: FocusOrigin): Promise<DrawerToggleResult> {
    return this.toggle(true, openedVia);
  }

  /** Close the drawer. */
  close(): Promise<DrawerToggleResult> {
    return this.toggle(false);
  }

  closeViaBackdropClick(): Promise<DrawerToggleResult> {
    return this.setOpen(/* isOpen */ false, /* restoreFocus */ true, 'mouse');
  }

  toggle(
    isOpen = !this.opened,
    openedVia?: FocusOrigin
  ): Promise<DrawerToggleResult> {
    if (isOpen && openedVia) {
      this.openedVia = openedVia;
    }

    const result = this.setOpen(
      isOpen,
      /* restoreFocus */ !isOpen && this.isFocusWithinDrawer(),
      this.openedVia || 'program'
    );

    if (!isOpen) {
      this.openedVia = null;
    }

    return result;
  }

  private setOpen(
    isOpen: boolean,
    restoreFocus: boolean,
    focusOrigin: Exclude<FocusOrigin, null>
  ): Promise<DrawerToggleResult> {
    this._opened = isOpen;

    if (isOpen) {
      this.animationState = this.enableAnimations ? 'open' : 'open-instant';
    } else {
      this.animationState = 'void';
      if (restoreFocus) {
        this.restoreFocus(focusOrigin);
      }
    }

    this.updateFocusTrapState();

    return new Promise<DrawerToggleResult>((resolve) => {
      this.openedChange
        .pipe(take(1))
        .subscribe((open) => resolve(open ? 'open' : 'close'));
    });
  }

  getWidth(): number {
    return this.elementRef.nativeElement
      ? this.elementRef.nativeElement.offsetWidth || 0
      : 0;
  }

  private updateFocusTrapState() {
    if (this.focusTrap) {
      // The focus trap is only enabled when the drawer is open in any mode other than side.
      this.focusTrap.enabled = this.opened && this.mode !== 'side';
    }
  }
  private updatePositionInParent(newPosition: 'start' | 'end') {
    const element = this.elementRef.nativeElement;
    const parent = element.parentNode!;

    if (newPosition === 'end') {
      if (!this.anchor) {
        this.anchor = this.doc.createComment('ccc-drawer-anchor')!;
        parent.insertBefore(this.anchor!, element);
      }

      parent.appendChild(element);
    } else if (this.anchor) {
      this.anchor.parentNode!.insertBefore(element, this.anchor);
    }
  }

  deviceDisplayIsSmall() {
    return this.breakpointObserver.isMatched([
      Breakpoints.Small,
      Breakpoints.XSmall,
    ]);
  }
}

@Component({
  selector: 'ccc-drawer-container',
  exportAs: 'cccDrawerContainer',
  templateUrl: './ccc-drawer-container.component.html',
  styleUrls: ['./ccc-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CCC_DRAWER_CONTAINER,
      useExisting: CCCDrawerContainerComponent,
    },
  ],
})
export class CCCDrawerContainerComponent
  implements AfterContentInit, DoCheck, OnDestroy
{
  @HostBinding('attr.ngSkipHydration') ngSkipHydrationAttribute = '';

  @HostBinding('class') get container() {
    return 'ccc-drawer-container';
  }

  @HostBinding('class.ccc-drawer-container-explicit-backdrop')
  get backdrop() {
    return this.backdropOverride;
  }

  @ContentChildren(CCCDrawerComponent, {
    descendants: true,
  })
  allDrawers?: QueryList<CCCDrawerComponent>;

  /** Drawers that belong to this container. */
  drawers = new QueryList<CCCDrawerComponent>();

  @ContentChild(CCCDrawerContentComponent)
  content?: CCCDrawerContentComponent;
  @ViewChild(CCCDrawerContentComponent)
  userContent?: CCCDrawerContentComponent;

  get start(): CCCDrawerComponent | null {
    return this._start;
  }

  get end(): CCCDrawerComponent | null {
    return this._end;
  }

  @Input()
  get autosize(): boolean {
    return this._autosize;
  }
  set autosize(value: BooleanInput) {
    this._autosize = coerceBooleanProperty(value);
  }
  private _autosize: boolean;
  @Input()
  get hasBackdrop(): boolean {
    if (this.backdropOverride == null) {
      return (
        !this._start ||
        this._start.mode !== 'side' ||
        !this._end ||
        this._end.mode !== 'side'
      );
    }

    return this.backdropOverride;
  }
  set hasBackdrop(value: BooleanInput) {
    this.backdropOverride = value == null ? null : coerceBooleanProperty(value);
  }
  backdropOverride: boolean | null = null;

  /** Event emitted when the drawer backdrop is clicked. */
  @Output() readonly backdropClick: EventEmitter<void> =
    new EventEmitter<void>();

  /** The drawer at the start/end position, independent of direction. */
  private _start: CCCDrawerComponent | null = null;
  private _end: CCCDrawerComponent | null = null;

  private left: CCCDrawerComponent | null = null;
  private right: CCCDrawerComponent | null = null;

  private readonly destroyed = new Subject<void>();

  private readonly doCheckSubject = new Subject<void>();

  contentMargins: { left: number | null; right: number | null } = {
    left: null,
    right: null,
  };

  readonly contentMarginChanges = new Subject<{
    left: number | null;
    right: number | null;
  }>();

  /** Reference to the CdkScrollable instance that wraps the scrollable content. */
  get scrollable(): CdkScrollable {
    const cdkScrollable = this.userContent || this.content;
    return cdkScrollable!;
  }
  constructor(
    @Optional() private dir: Directionality,
    private element: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private cdRef: ChangeDetectorRef,
    viewportRuler: ViewportRuler,
    @Inject(CCC_DRAWER_DEFAULT_AUTOSIZE) defaultAutosize = false,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) private animationMode?: string
  ) {
    if (dir) {
      dir.change.pipe(takeUntil(this.destroyed)).subscribe(() => {
        this.validateDrawers();
        this.updateContentMargins();
      });
    }

    viewportRuler
      .change()
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => this.updateContentMargins());

    this._autosize = defaultAutosize;
  }

  ngAfterContentInit() {
    this.allDrawers?.changes
      .pipe(startWith(this.allDrawers), takeUntil(this.destroyed))
      .subscribe((drawer: QueryList<CCCDrawerComponent>) => {
        this.drawers.reset(
          drawer.filter((item) => !item.container || item.container === this)
        );
        this.drawers.notifyOnChanges();
      });

    this.drawers.changes.pipe(startWith(null)).subscribe(() => {
      this.validateDrawers();

      this.drawers.forEach((drawer: CCCDrawerComponent) => {
        this.watchDrawerToggle(drawer);
        this.watchDrawerPosition(drawer);
        this.watchDrawerMode(drawer);
      });

      if (
        !this.drawers.length ||
        this.isDrawerOpen(this._start) ||
        this.isDrawerOpen(this._end)
      ) {
        this.updateContentMargins();
      }

      this.cdRef.markForCheck();
    });

    // Avoid hitting the NgZone through the debounce timeout.
    this.ngZone.runOutsideAngular(() => {
      this.doCheckSubject
        .pipe(debounceTime(10), takeUntil(this.destroyed))
        .subscribe(() => this.updateContentMargins());
    });
  }

  ngOnDestroy() {
    this.contentMarginChanges.complete();
    this.doCheckSubject.complete();
    this.drawers.destroy();
    this.destroyed.next();
    this.destroyed.complete();
  }

  /** Calls `open` of both start and end drawers */
  open(): void {
    this.drawers.forEach((drawer) => drawer.open());
  }

  /** Calls `close` of both start and end drawers */
  close(): void {
    this.drawers.forEach((drawer) => drawer.close());
  }

  updateContentMargins() {
    let left = 0;
    let right = 0;

    if (this.left && this.left.opened) {
      if (this.left.mode == 'side') {
        left += this.left.getWidth();
      } else if (this.left.mode == 'push') {
        const width = this.left.getWidth();
        left += width;
        right -= width;
      }
    }

    if (this.right && this.right.opened) {
      if (this.right.mode == 'side') {
        right += this.right.getWidth();
      } else if (this.right.mode == 'push') {
        const width = this.right.getWidth();
        right += width;
        left -= width;
      }
    }

    left = left || null!;
    right = right || null!;

    if (
      left !== this.contentMargins.left ||
      right !== this.contentMargins.right
    ) {
      this.contentMargins = { left, right };
      this.ngZone.run(() => {
        this.contentMarginChanges.next(this.contentMargins);
      });
    }
  }

  ngDoCheck() {
    // If users opted into autosizing, do a check every change detection cycle.
    if (this._autosize && this.isPushed()) {
      // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
      this.ngZone.runOutsideAngular(() => this.doCheckSubject.next());
    }
  }

  private watchDrawerToggle(drawer: CCCDrawerComponent): void {
    drawer.animationStarted
      .pipe(
        filter((event: AnimationEvent) => event.fromState !== event.toState),
        takeUntil(this.drawers.changes)
      )
      .subscribe((event: AnimationEvent) => {
        // Set the transition class on the container so that the animations occur. This should not
        // be set initially because animations should only be triggered via a change in state.
        if (
          event.toState !== 'open-instant' &&
          this.animationMode !== 'NoopAnimations'
        ) {
          this.element.nativeElement.classList.add('ccc-drawer-transition');
        }

        this.updateContentMargins();
        this.cdRef.markForCheck();
      });

    if (drawer.mode !== 'side') {
      drawer.openedChange
        .pipe(takeUntil(this.drawers.changes))
        .subscribe(() => this.setContainerClass(drawer.opened));
    }
  }

  private watchDrawerPosition(drawer: CCCDrawerComponent): void {
    if (!drawer) {
      return;
    }
    drawer.onPositionChanged
      .pipe(takeUntil(this.drawers.changes))
      .subscribe(() => {
        this.ngZone.onMicrotaskEmpty.pipe(take(1)).subscribe(() => {
          this.validateDrawers();
        });
      });
  }

  private watchDrawerMode(drawer: CCCDrawerComponent): void {
    if (drawer) {
      drawer.modeChanged
        .pipe(takeUntil(merge(this.drawers.changes, this.destroyed)))
        .subscribe(() => {
          this.updateContentMargins();
          this.cdRef.markForCheck();
        });
    }
  }

  private setContainerClass(isAdd: boolean): void {
    const classList = this.element.nativeElement.classList;
    const className = 'ccc-drawer-container-has-open';

    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }

  private validateDrawers() {
    this._start = this._end = null;

    // Ensure that we have at most one start and one end drawer.
    this.drawers.forEach((drawer) => {
      if (drawer.position == 'end') {
        if (
          this._end != null &&
          (typeof isDevMode() === 'undefined' || isDevMode())
        ) {
          throwMatDuplicatedDrawerError('end');
        }
        this._end = drawer;
      } else {
        if (
          this._start != null &&
          (typeof isDevMode() === 'undefined' || isDevMode())
        ) {
          throwMatDuplicatedDrawerError('start');
        }
        this._start = drawer;
      }
    });

    this.right = this.left = null;

    // Detect if we're LTR or RTL.
    if (this.dir && this.dir.value === 'rtl') {
      this.left = this._end;
      this.right = this._start;
    } else {
      this.left = this._start;
      this.right = this._end;
    }
  }

  /** Whether the container is being pushed to the side by one of the drawers. */
  private isPushed() {
    return (
      (this.isDrawerOpen(this._start) && this._start.mode != 'over') ||
      (this.isDrawerOpen(this._end) && this._end.mode != 'over')
    );
  }

  onBackdropClicked() {
    this.backdropClick.emit();
    this.closeModalDrawersViaBackdrop();
  }

  closeModalDrawersViaBackdrop() {
    // Close all open drawers where closing is not disabled and the mode is not `side`.
    [this._start, this._end]
      .filter(
        (drawer) =>
          drawer && !drawer.disableClose && this.canHaveBackdrop(drawer)
      )
      .forEach((drawer) => drawer!.closeViaBackdropClick());
  }

  isShowingBackdrop(): boolean {
    return (
      (this.isDrawerOpen(this._start) && this.canHaveBackdrop(this._start)) ||
      (this.isDrawerOpen(this._end) && this.canHaveBackdrop(this._end))
    );
  }

  private canHaveBackdrop(drawer: CCCDrawerComponent): boolean {
    return drawer.mode !== 'side' || !!this.backdropOverride;
  }

  private isDrawerOpen(
    drawer: CCCDrawerComponent | null
  ): drawer is CCCDrawerComponent {
    return drawer != null && drawer.opened;
  }
}
