import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnPopupComponent } from './warn-popup.component';

describe('WarnPopupComponent', () => {
  let component: WarnPopupComponent;
  let fixture: ComponentFixture<WarnPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarnPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
