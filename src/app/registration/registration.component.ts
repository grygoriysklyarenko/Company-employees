import { AddedAccountComponent } from './../added-account/added-account.component';
import { PasswordsMismatchComponent } from '../passwords-mismatch/passwords-mismatch.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WentWrongComponent } from '../went-wrong/went-wrong.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  reactiveFormReg : FormGroup;

  user = { email : '', password: '', passwordConfirm : '' };

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    ) {
      this.reactiveFormReg = new FormGroup ({});
    }

  ngOnInit() {
    this.initForm();
  };

  initForm(){
    this.reactiveFormReg = this.fb.group({
      email: ['eve.holt@reqres.in'],
      password: ['pistol'],
      passwordConfirm: ['pistol']
    });
  };

  onSubmit() {

    this.user.email = this.reactiveFormReg.value.email;
    this.user.password = this.reactiveFormReg.value.password;
    this.user.passwordConfirm = this.reactiveFormReg.value.passwordConfirm;

    if(this.user.password === this.user.passwordConfirm){

      this.http.post('https://reqres.in/api/register', this.user).subscribe( _ => {
        this.dialog.open(AddedAccountComponent);
        this.router.navigate(['/login']);
      }, _ => this.dialog.open(WentWrongComponent));
    } else {
      this.dialog.open(PasswordsMismatchComponent);
    };
  };
}