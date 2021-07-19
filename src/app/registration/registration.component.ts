import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router) {
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
        alert ("Account added successfully. Sign in to your account!");
        this.router.navigate(['/login']);
      }, _ => alert('Something went wrong!'));
    } else {
      alert ('Passwords mismatch!');
    };
  };
}