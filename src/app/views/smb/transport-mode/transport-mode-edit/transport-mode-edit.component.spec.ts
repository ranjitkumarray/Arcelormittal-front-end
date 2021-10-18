import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportModeEditComponent } from './transport-mode-edit.component';

describe('TransportModeEditComponent', () => {
  let component: TransportModeEditComponent;
  let fixture: ComponentFixture<TransportModeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportModeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportModeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
