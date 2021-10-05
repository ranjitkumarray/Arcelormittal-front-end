import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAlloyScrapComponent } from './history-alloy-scrap.component';

describe('HistoryAlloyScrapComponent', () => {
  let component: HistoryAlloyScrapComponent;
  let fixture: ComponentFixture<HistoryAlloyScrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAlloyScrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAlloyScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
