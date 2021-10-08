import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBasePriceAdditionComponent } from './add-base-price-addition.component';

describe('AddBasePriceAdditionComponent', () => {
  let component: AddBasePriceAdditionComponent;
  let fixture: ComponentFixture<AddBasePriceAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBasePriceAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBasePriceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
