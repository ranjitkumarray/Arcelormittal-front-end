import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMillEditComponent } from './delivery-mill-edit.component';

describe('DeliveryMillEditComponent', () => {
  let component: DeliveryMillEditComponent;
  let fixture: ComponentFixture<DeliveryMillEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryMillEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMillEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
