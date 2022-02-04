import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordApprovalComponent } from './record-approval.component';

describe('RecordApprovalComponent', () => {
  let component: RecordApprovalComponent;
  let fixture: ComponentFixture<RecordApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
