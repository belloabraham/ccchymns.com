import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, SimpleChanges } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgMatTooltipModule } from '../../ng-mat-tooltip.module';
import { XPosition } from '@material/tooltip';

@Component({
  template: `<button ng-mat-tooltip [id]="tooltipId">Hover me</button>
    <div
      ng-mat-tooltip
      [id]="tooltipId"
      [showDelay]="100"
      [hideDelay]="100"
      [xPosition]="XPosition.Below"
      [yPosition]="XPosition.Center"
    >
      Some label
    </div> `,
})
class TestComponent {
  tooltipId = 'test-tooltip-id';
  XPosition = XPosition;
}

describe('NgMatTooltipDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let divElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgMatTooltipModule],
    });

    fixture = TestBed.createComponent(TestComponent);
    divElement = fixture.debugElement.query(By.css('div'));

    // Trigger initial data binding
    fixture.detectChanges();
  });

  it('should set attributes on initialization', () => {
    // const directiveInstance = divElement.injector.get(NgMatTooltipDirective);

    expect(
      divElement.nativeElement.classList.contains('mdc-tooltip')
    ).toBeTruthy();
    expect(divElement.nativeElement.getAttribute('role')).toBe('tooltip');
    expect(divElement.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });

});
