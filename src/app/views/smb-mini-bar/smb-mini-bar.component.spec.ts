import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmbMiniBarComponent } from './smb-mini-bar.component';

describe('SmbMiniBarComponent', () => {
  let component: SmbMiniBarComponent;
  let fixture: ComponentFixture<SmbMiniBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmbMiniBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmbMiniBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
