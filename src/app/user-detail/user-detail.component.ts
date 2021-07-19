import { ChangeUserComponent } from './../change-user/change-user.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {

  id : any;
  user = { first_name : '', last_name: '', id: '', avatar: ''};

  constructor(
    private http: HttpClient,  
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {};

  ngOnInit() : void{
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get('https://reqres.in/api/users/'+ this.id).subscribe((response:any)=>this.user = response.data);
  };

  changInfo(){
    this.dialog.open(ChangeUserComponent);
  };

  deliteUser(){
    this.http.delete('https://reqres.in/api/users/'+ this.id).subscribe(() => this.router.navigate(['/users']));
  };
}