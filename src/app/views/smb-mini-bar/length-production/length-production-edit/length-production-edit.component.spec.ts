import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthProductionEditComponent } from './length-production-edit.component';

describe('LengthProductionEditComponent', () => {
  let component: LengthProductionEditComponent;
  let fixture: ComponentFixture<LengthProductionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthProductionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthProductionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
