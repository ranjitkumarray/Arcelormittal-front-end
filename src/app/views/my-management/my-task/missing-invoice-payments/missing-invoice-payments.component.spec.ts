import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingInvoicePaymentsComponent } from './missing-invoice-payments.component';

describe('MissingInvoicePaymentsComponent', () => {
  let component: MissingInvoicePaymentsComponent;
  let fixture: ComponentFixture<MissingInvoicePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingInvoicePaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingInvoicePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
