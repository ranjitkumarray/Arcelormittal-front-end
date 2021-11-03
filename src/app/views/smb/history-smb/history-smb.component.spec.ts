import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySmbComponent } from './history-smb.component';

describe('HistorySmbComponent', () => {
  let component: HistorySmbComponent;
  let fixture: ComponentFixture<HistorySmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySmbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
