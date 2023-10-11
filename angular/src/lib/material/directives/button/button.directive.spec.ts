import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ButtonDirective } from './button.directive';

@Component({
  standalone: true,
  imports: [ButtonDirective],
  template:
    '<button ccc-button [variant]="variant" [size]="size" [outlined]="outlined" [color]="color"></button>',
})
class TestComponent {
  variant = 'btn';
  size = 'md';
  outlined = false;
  color = 'primary';
}

describe('ButtonDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let buttonElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    buttonElement = fixture.debugElement.query(By.directive(ButtonDirective));
  });

  it('should add default classes to host element', () => {
    const hostElement = buttonElement.nativeElement as HTMLButtonElement;
    expect(hostElement.classList.contains('btn-primary')).toBeTruthy();
    expect(hostElement.classList.contains('btn-md')).toBeTruthy();
    expect(hostElement.classList.contains('btn')).toBeTruthy();
  });

  it('should update host element classes based on input properties', () => {
    const testCases = [
      {
        variant: 'btn',
        size: 'md',
        outlined: false,
        color: 'danger',
        expectedClass: 'btn btn-danger btn-md',
      },
      {
        variant: 'check',
        size: 'sm',
        outlined: true,
        color: 'info',
        expectedClass: 'btn-check btn-outline-info btn-sm',
      },
      {
        variant: 'close',
        size: 'sm',
        outlined: false,
        color: 'danger',
        expectedClass: 'btn-close btn-danger btn-sm',
      },
      {
        variant: 'btn',
        size: 'lg',
        outlined: false,
        color: 'success',
        expectedClass: 'btn btn-success btn-lg',
      },
    ];

    for (const testCase of testCases) {
      fixture.componentInstance.variant = testCase.variant;
      fixture.componentInstance.size = testCase.size;
      fixture.componentInstance.outlined = testCase.outlined;
      fixture.componentInstance.color = testCase.color;
      fixture.detectChanges();

      const hostElement = buttonElement.nativeElement as HTMLButtonElement;
      //*Check if string values are anagrams as ButtonDirective @Hostbinding
      //*binds classes to host element in random order
      expect(getSortStringWithoutWhiteSpaces(hostElement.classList.value)).toBe(
        getSortStringWithoutWhiteSpaces(testCase.expectedClass)
      );
    }
  });
});

function getSortStringWithoutWhiteSpaces(value: string) {
  const stringWithoutWhiteSpace = value.replace(/\s/g, '').toLowerCase();
  const sortedString = stringWithoutWhiteSpace.split('').sort().join('');
  return sortedString;
}
