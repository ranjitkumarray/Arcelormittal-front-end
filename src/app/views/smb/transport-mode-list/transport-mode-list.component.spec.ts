import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportModeListComponent } from './transport-mode-list.component';

describe('TransportModeListComponent', () => {
  let component: TransportModeListComponent;
  let fixture: ComponentFixture<TransportModeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportModeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportModeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
