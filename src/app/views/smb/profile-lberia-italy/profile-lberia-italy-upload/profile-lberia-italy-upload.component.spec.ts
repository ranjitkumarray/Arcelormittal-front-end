import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLberiaItalyUploadComponent } from './profile-lberia-italy-upload.component';

describe('ProfileLberiaItalyUploadComponent', () => {
  let component: ProfileLberiaItalyUploadComponent;
  let fixture: ComponentFixture<ProfileLberiaItalyUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLberiaItalyUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLberiaItalyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
