import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangeUserDialogComponent } from '../change-user-dialog/change-user-dialog.component';

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.scss']
})

export class ChangeUserComponent implements OnInit {

  reactiveFormChange : FormGroup;
  userNew = { name: '', job:''};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {first_name : '', last_name:''}
  ) {
    this.reactiveFormChange = new FormGroup ({});
  };

  ngOnInit() {
    this.initForm();
  };

  initForm(){
    this.reactiveFormChange = this.fb.group({
      name: this.data.first_name,
      job: this.data.last_name
    });
  };

  changeUser(){
    this.userNew.name = this.reactiveFormChange.value.name;
    this.userNew.job = this.reactiveFormChange.value.job;

    this.http.put('https://reqres.in/api/users', this.userNew).subscribe( _ => {
      this.router.navigate(['/users']);
      this.dialog.open(ChangeUserDialogComponent);
    });
  };
}
