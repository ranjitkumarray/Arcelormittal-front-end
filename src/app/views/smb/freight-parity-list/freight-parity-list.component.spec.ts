import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightParityListComponent } from './freight-parity-list.component';

describe('FreightParityListComponent', () => {
  let component: FreightParityListComponent;
  let fixture: ComponentFixture<FreightParityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreightParityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightParityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
