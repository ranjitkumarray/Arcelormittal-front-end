import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncotermExceptionsUploadComponent } from './incoterm-exceptions-upload.component';

describe('IncotermExceptionsUploadComponent', () => {
  let component: IncotermExceptionsUploadComponent;
  let fixture: ComponentFixture<IncotermExceptionsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncotermExceptionsUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncotermExceptionsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
