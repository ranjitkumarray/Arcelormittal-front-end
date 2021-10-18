import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeUploadComponent } from './grade-upload.component';

describe('GradeUploadComponent', () => {
  let component: GradeUploadComponent;
  let fixture: ComponentFixture<GradeUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
