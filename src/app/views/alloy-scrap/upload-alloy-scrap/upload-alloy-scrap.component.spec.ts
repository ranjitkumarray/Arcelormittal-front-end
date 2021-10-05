import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAlloyScrapComponent } from './upload-alloy-scrap.component';

describe('UploadAlloyScrapComponent', () => {
  let component: UploadAlloyScrapComponent;
  let fixture: ComponentFixture<UploadAlloyScrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAlloyScrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAlloyScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
