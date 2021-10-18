import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightParityEditComponent } from './freight-parity-edit.component';

describe('FreightParityEditComponent', () => {
  let component: FreightParityEditComponent;
  let fixture: ComponentFixture<FreightParityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreightParityEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightParityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
