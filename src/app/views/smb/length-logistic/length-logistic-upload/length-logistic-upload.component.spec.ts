import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthLogisticUploadComponent } from './length-logistic-upload.component';

describe('LengthLogisticUploadComponent', () => {
  let component: LengthLogisticUploadComponent;
  let fixture: ComponentFixture<LengthLogisticUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthLogisticUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthLogisticUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
