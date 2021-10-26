import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadValidateModalComponent } from './upload-validate-modal.component';

describe('UploadValidateModalComponent', () => {
  let component: UploadValidateModalComponent;
  let fixture: ComponentFixture<UploadValidateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadValidateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadValidateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
