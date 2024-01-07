import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgMatDialogRichTooltipButtonDirective } from './dialog-rich-tooltip.directive';

@Component({
  template: '<a ng-mat-dialog-rich-tooltip [id]="tooltipId"></a>',
})
class TestComponent {
  tooltipId = 'test-tooltip-id';
}

describe('NgMatDialogRichTooltipButtonDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let anchorElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgMatDialogRichTooltipButtonDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    anchorElement = fixture.debugElement.query(By.css('a'));

    // Trigger initial data binding
    fixture.detectChanges();
  });

  it('should set attributes on initialization', () => {
    const directiveInstance = anchorElement.injector.get(
      NgMatDialogRichTooltipButtonDirective
    );

    expect(anchorElement.nativeElement.getAttribute('data-tooltip-id')).toBe(
      'test-tooltip-id'
    );
    expect(anchorElement.nativeElement.getAttribute('aria-haspopup')).toBe(
      'dialog'
    );
    expect(anchorElement.nativeElement.getAttribute('aria-expanded')).toBe(
      'false'
    );
  });

  // Add more tests as needed
});
