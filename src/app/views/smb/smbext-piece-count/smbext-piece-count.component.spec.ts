import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMBExtPieceCountComponent } from './smbext-piece-count.component';

describe('SMBExtPieceCountComponent', () => {
  let component: SMBExtPieceCountComponent;
  let fixture: ComponentFixture<SMBExtPieceCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMBExtPieceCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMBExtPieceCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
