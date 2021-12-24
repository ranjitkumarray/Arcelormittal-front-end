import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMillListComponent } from './delivery-mill-list.component';

describe('DeliveryMillListComponent', () => {
  let component: DeliveryMillListComponent;
  let fixture: ComponentFixture<DeliveryMillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryMillListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
