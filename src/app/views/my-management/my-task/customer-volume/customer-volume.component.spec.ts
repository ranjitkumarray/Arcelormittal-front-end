import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVolumeComponent } from './customer-volume.component';

describe('CustomerVolumeComponent', () => {
  let component: CustomerVolumeComponent;
  let fixture: ComponentFixture<CustomerVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
