import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordsMismatchComponent } from './passwords-mismatch.component';

describe('PasswordsMismatchComponent', () => {
  let component: PasswordsMismatchComponent;
  let fixture: ComponentFixture<PasswordsMismatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordsMismatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordsMismatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
