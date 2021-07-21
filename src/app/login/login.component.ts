import { UncorrectPassDialogComponent } from './../uncorrect-pass-dialog/uncorrect-pass-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  reactiveForm : FormGroup;
  user = { email : '', password: ''};
  // activ : boolean = false

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
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
    }, _ => this.dialog.open(UncorrectPassDialogComponent));
  };
}