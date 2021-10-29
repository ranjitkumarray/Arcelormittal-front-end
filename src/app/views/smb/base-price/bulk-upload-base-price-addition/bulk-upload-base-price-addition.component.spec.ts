import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadBasePriceAdditionComponent } from './bulk-upload-base-price-addition.component';

describe('BulkUploadBasePriceAdditionComponent', () => {
  let component: BulkUploadBasePriceAdditionComponent;
  let fixture: ComponentFixture<BulkUploadBasePriceAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkUploadBasePriceAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkUploadBasePriceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
