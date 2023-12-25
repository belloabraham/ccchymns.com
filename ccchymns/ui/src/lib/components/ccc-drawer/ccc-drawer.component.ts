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
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import {
  filter,
  map,
  take,
  takeUntil,
  distinctUntilChanged,
  mapTo,
} from 'rxjs/operators';
import { cccDrawerAnimations } from './drawer-animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';
import {
  AutoFocusTarget,
  CCC_DRAWER_CONTAINER,
  DrawerMode,
  DrawerToggleResult,
} from './drawer.token';
import { CCCDrawerContainerComponent } from './ccc-drawer-container.component';

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
  implements AfterViewInit, AfterContentChecked, OnDestroy, OnChanges
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
