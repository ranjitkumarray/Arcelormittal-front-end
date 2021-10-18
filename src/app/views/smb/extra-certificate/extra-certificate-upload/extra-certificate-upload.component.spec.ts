import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCertificateUploadComponent } from './extra-certificate-upload.component';

describe('ExtraCertificateUploadComponent', () => {
  let component: ExtraCertificateUploadComponent;
  let fixture: ComponentFixture<ExtraCertificateUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCertificateUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCertificateUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
