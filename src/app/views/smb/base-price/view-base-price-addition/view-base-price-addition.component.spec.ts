import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBasePriceAdditionComponent } from './view-base-price-addition.component';

describe('ViewBasePriceAdditionComponent', () => {
  let component: ViewBasePriceAdditionComponent;
  let fixture: ComponentFixture<ViewBasePriceAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBasePriceAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBasePriceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
