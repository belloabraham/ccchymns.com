import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgMaterialIconButtonDirective } from './icon-button.directive';

@Component({
  template: '<button ng-mat-icon-button></button>',
})
class TestComponent {}

describe('NgMaterialIconButtonDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let buttonElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports:[NgMaterialIconButtonDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    buttonElement = fixture.debugElement.query(By.css('button'));

    // Trigger initial data binding
    fixture.detectChanges();
  });

  it('should add the mdc-icon-button class on initialization', () => {
    expect(buttonElement.nativeElement.classList.contains('mdc-icon-button')).toBeTruthy();
  });
});
