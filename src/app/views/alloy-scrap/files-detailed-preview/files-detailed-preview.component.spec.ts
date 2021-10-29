import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesDetailedPreviewComponent } from './files-detailed-preview.component';

describe('FilesDetailedPreviewComponent', () => {
  let component: FilesDetailedPreviewComponent;
  let fixture: ComponentFixture<FilesDetailedPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesDetailedPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesDetailedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
