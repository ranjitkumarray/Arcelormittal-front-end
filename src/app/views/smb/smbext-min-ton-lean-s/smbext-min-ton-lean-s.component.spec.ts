import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMBExtMinTonLeanSComponent } from './smbext-min-ton-lean-s.component';

describe('SMBExtMinTonLeanSComponent', () => {
  let component: SMBExtMinTonLeanSComponent;
  let fixture: ComponentFixture<SMBExtMinTonLeanSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMBExtMinTonLeanSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMBExtMinTonLeanSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
