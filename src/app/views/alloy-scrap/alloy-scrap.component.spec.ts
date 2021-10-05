import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloyScrapComponent } from './alloy-scrap.component';

describe('AlloyScrapComponent', () => {
  let component: AlloyScrapComponent;
  let fixture: ComponentFixture<AlloyScrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlloyScrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlloyScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
