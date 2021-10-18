import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCertificateListComponent } from './extra-certificate-list.component';

describe('ExtraCertificateListComponent', () => {
  let component: ExtraCertificateListComponent;
  let fixture: ComponentFixture<ExtraCertificateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCertificateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCertificateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
