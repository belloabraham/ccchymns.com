import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTonicSolfaDialogComponent } from './update-tonic-solfa-dialog.component';

describe('UpdateTonicSolfaDialogComponent', () => {
  let component: UpdateTonicSolfaDialogComponent;
  let fixture: ComponentFixture<UpdateTonicSolfaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTonicSolfaDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTonicSolfaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
