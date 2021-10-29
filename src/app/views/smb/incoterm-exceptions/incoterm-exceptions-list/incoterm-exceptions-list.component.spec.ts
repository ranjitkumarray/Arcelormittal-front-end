import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncotermExceptionsListComponent } from './incoterm-exceptions-list.component';

describe('IncotermExceptionsListComponent', () => {
  let component: IncotermExceptionsListComponent;
  let fixture: ComponentFixture<IncotermExceptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncotermExceptionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncotermExceptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
