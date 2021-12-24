import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthLogisticListComponent } from './length-logistic-list.component';

describe('LengthLogisticListComponent', () => {
  let component: LengthLogisticListComponent;
  let fixture: ComponentFixture<LengthLogisticListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthLogisticListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthLogisticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
