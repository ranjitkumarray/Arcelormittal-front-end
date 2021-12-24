import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncotermExceptionsEditComponent } from './incoterm-exceptions-edit.component';

describe('IncotermExceptionsEditComponent', () => {
  let component: IncotermExceptionsEditComponent;
  let fixture: ComponentFixture<IncotermExceptionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncotermExceptionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncotermExceptionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
