import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthProductionListComponent } from './length-production-list.component';

describe('LengthProductionListComponent', () => {
  let component: LengthProductionListComponent;
  let fixture: ComponentFixture<LengthProductionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthProductionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthProductionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
