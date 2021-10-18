import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightParityUploadComponent } from './freight-parity-upload.component';

describe('FreightParityUploadComponent', () => {
  let component: FreightParityUploadComponent;
  let fixture: ComponentFixture<FreightParityUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreightParityUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightParityUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
