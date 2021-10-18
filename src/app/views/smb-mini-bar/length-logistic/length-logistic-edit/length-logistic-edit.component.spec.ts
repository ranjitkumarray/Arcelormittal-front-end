import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthLogisticEditComponent } from './length-logistic-edit.component';

describe('LengthLogisticEditComponent', () => {
  let component: LengthLogisticEditComponent;
  let fixture: ComponentFixture<LengthLogisticEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthLogisticEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthLogisticEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
