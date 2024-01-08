/* eslint-disable @angular-eslint/no-output-on-prefix */
import { AnimationEvent } from '@angular/animations';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ANIMATION_MODULE_TYPE,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
  isDevMode,
} from '@angular/core';
import {  merge, Subject } from 'rxjs';
import {
  filter,
  take,
  takeUntil,
  debounceTime,
  startWith,
} from 'rxjs/operators';
import {
  CdkScrollable,
  ViewportRuler,
} from '@angular/cdk/scrolling';
import { Directionality } from '@angular/cdk/bidi';
import { CCCDrawerComponent } from './ccc-drawer.component';
import { CCCDrawerContentComponent } from './ccc-drawer-content.component';
import { CCC_DRAWER_CONTAINER, CCC_DRAWER_DEFAULT_AUTOSIZE, throwMatDuplicatedDrawerError } from './drawer.token';

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
    this.drawers?.changes
      .pipe(startWith(this.drawers), takeUntil(this.destroyed))
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
