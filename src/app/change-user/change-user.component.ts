import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.scss']
})

export class ChangeUserComponent implements OnInit {

  reactiveFormChange : FormGroup;
  user = { name: '', job:''};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.reactiveFormChange = new FormGroup ({});
  };

  ngOnInit() {
    this.initForm();
  };

  initForm(){
    this.reactiveFormChange = this.fb.group({
      name: ['morpheus'],
      job: ['zion resident']
    });
  };

  changeUser(){
    this.user.name = this.reactiveFormChange.value.name
    this.user.job = this.reactiveFormChange.value.job

    this.http.put('https://reqres.in/api/users', this.user).subscribe( _ => {
      this.router.navigate(['/users']);
      alert ("User change successfully!");
    });
  };
}
