import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatePopupComponent } from './validate-popup.component';

describe('ValidatePopupComponent', () => {
  let component: ValidatePopupComponent;
  let fixture: ComponentFixture<ValidatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
