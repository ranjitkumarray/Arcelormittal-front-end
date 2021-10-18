import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMillUploadComponent } from './delivery-mill-upload.component';

describe('DeliveryMillUploadComponent', () => {
  let component: DeliveryMillUploadComponent;
  let fixture: ComponentFixture<DeliveryMillUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryMillUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMillUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
