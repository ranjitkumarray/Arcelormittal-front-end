import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCertificateEditComponent } from './extra-certificate-edit.component';

describe('ExtraCertificateEditComponent', () => {
  let component: ExtraCertificateEditComponent;
  let fixture: ComponentFixture<ExtraCertificateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCertificateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCertificateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
