import { UserAddedDialogComponent } from './../user-added-dialog/user-added-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})

export class AddNewUserComponent implements OnInit {

  reactiveFormAdd : FormGroup;
  user = { name : '', job: ''};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.reactiveFormAdd = new FormGroup ({});
  };

  ngOnInit() {
    this.initForm();
  };

  initForm(){
    this.reactiveFormAdd = this.fb.group({
      name: ['morpheus'],
      job: ['leader']
    });
  };

  addUser(){
    this.user.name = this.reactiveFormAdd.value.name;
    this.user.job = this.reactiveFormAdd.value.job;

    this.http.post('https://reqres.in/api/users', this.user).subscribe( _ => {
      this.router.navigate(['/users']);
      this.dialog.open(UserAddedDialogComponent)
    });
  };
}
