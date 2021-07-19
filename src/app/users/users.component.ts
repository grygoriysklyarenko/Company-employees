import { AddNewUserComponent } from './../add-new-user/add-new-user.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  response : any;
  users : any;
  prev : boolean = true;
  next : boolean = false;

  constructor( 
    private http: HttpClient, 
    public dialog: MatDialog
  ) { };

  ngOnInit(): void {
    this.getUsers();
  };

  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user; 
  };

  getUsers(): void {
    this.http.get('https://reqres.in/api/users?page=1')
      .subscribe((response:any)=>{
        this.users = response.data;
        this.response = response;
      }
    )
  };

  nextPage(){
    if(this.response.total_pages>this.response.page){  
      this.response.page+=1;
      this.http.get('https://reqres.in/api/users?page='+(this.response.page))
        .subscribe((response:any)=>{
          this.users = response.data;
          if(this.response.total_pages=this.response.page){
            this.prev = false;
            this.next = true;
          } else {
            this.prev = false;
            this.next = false;
          };
        }
      );  
    };
  };

  previousPage(){
    if(this.response.page>1){
      this.response.page -= 1;
      this.http.get('https://reqres.in/api/users?page='+(this.response.page))
        .subscribe((response:any)=>{
          this.users = response.data;
          if(this.response.page=1){
            this.next = false;
            this.prev = true;
          } else {
            this.prev = false;
            this.next = false;
          };
        }
      );
    };
  };

  addNewUser() {
    this.dialog.open(AddNewUserComponent);
  };
}