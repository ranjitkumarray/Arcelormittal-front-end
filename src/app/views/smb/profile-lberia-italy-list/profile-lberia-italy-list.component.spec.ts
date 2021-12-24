import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLberiaItalyListComponent } from './profile-lberia-italy-list.component';

describe('ProfileLberiaItalyListComponent', () => {
  let component: ProfileLberiaItalyListComponent;
  let fixture: ComponentFixture<ProfileLberiaItalyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLberiaItalyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLberiaItalyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
