import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMBDisEarlyPtmComponent } from './smbdis-early-ptm.component';

describe('SMBDisEarlyPtmComponent', () => {
  let component: SMBDisEarlyPtmComponent;
  let fixture: ComponentFixture<SMBDisEarlyPtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMBDisEarlyPtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMBDisEarlyPtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
