import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLberiaItalyEditComponent } from './profile-lberia-italy-edit.component';

describe('ProfileLberiaItalyEditComponent', () => {
  let component: ProfileLberiaItalyEditComponent;
  let fixture: ComponentFixture<ProfileLberiaItalyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLberiaItalyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLberiaItalyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
