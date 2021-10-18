import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBasePriceAdditionComponent } from './edit-base-price-addition.component';

describe('EditBasePriceAdditionComponent', () => {
  let component: EditBasePriceAdditionComponent;
  let fixture: ComponentFixture<EditBasePriceAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBasePriceAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBasePriceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
