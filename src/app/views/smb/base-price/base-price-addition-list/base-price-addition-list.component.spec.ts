import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePriceAdditionListComponent } from './base-price-addition-list.component';

describe('BasePriceAdditionListComponent', () => {
  let component: BasePriceAdditionListComponent;
  let fixture: ComponentFixture<BasePriceAdditionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePriceAdditionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePriceAdditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
