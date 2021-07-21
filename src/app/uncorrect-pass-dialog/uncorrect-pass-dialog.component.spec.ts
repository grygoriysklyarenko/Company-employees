import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncorrectPassDialogComponent } from './uncorrect-pass-dialog.component';

describe('UncorrectPassDialogComponent', () => {
  let component: UncorrectPassDialogComponent;
  let fixture: ComponentFixture<UncorrectPassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncorrectPassDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncorrectPassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
