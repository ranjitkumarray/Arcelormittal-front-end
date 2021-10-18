import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthProductionUploadComponent } from './length-production-upload.component';

describe('LengthProductionUploadComponent', () => {
  let component: LengthProductionUploadComponent;
  let fixture: ComponentFixture<LengthProductionUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthProductionUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthProductionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
