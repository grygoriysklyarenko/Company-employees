import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedAccountComponent } from './added-account.component';

describe('AddedAccountComponent', () => {
  let component: AddedAccountComponent;
  let fixture: ComponentFixture<AddedAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
