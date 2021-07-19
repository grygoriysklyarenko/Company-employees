import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  reactiveForm : FormGroup;
  user = { email : '', password: ''};

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.reactiveForm = new FormGroup ({});
  };

  ngOnInit() {
    this.initForm();
  };

  initForm(){
    this.reactiveForm = this.fb.group({
      email: ['eve.holt@reqres.in'],
      password: ['cityslicka']
    });
  }

  onSubmit() {
    this.user.email = this.reactiveForm.value.email;
    this.user.password = this.reactiveForm.value.password;

    this.http.post('https://reqres.in/api/login', this.user).subscribe( _ => {
        this.router.navigate(['/users']);
    }, _ => alert ('Uncorrect email or password!'));
  };
}