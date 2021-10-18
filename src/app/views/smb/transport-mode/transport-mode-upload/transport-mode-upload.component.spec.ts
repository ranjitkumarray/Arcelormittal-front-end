import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportModeUploadComponent } from './transport-mode-upload.component';

describe('TransportModeUploadComponent', () => {
  let component: TransportModeUploadComponent;
  let fixture: ComponentFixture<TransportModeUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportModeUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportModeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
