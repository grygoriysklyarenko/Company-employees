import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { MatCardModule } from '@angular/material/card';
import { ChangeUserComponent } from './change-user/change-user.component';
import { WentWrongComponent } from './went-wrong/went-wrong.component';
import { PasswordsMismatchComponent } from './passwords-mismatch/passwords-mismatch.component';
import { AddedAccountComponent } from './added-account/added-account.component';
import { ChangeUserDialogComponent } from './change-user-dialog/change-user-dialog.component';
import { UserAddedDialogComponent } from './user-added-dialog/user-added-dialog.component';
import { UncorrectPassDialogComponent } from './uncorrect-pass-dialog/uncorrect-pass-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegistrationComponent,
    LoginComponent,
    UserDetailComponent,
    AddNewUserComponent,
    ChangeUserComponent,
    WentWrongComponent,
    PasswordsMismatchComponent,
    AddedAccountComponent,
    ChangeUserDialogComponent,
    UserAddedDialogComponent,
    UncorrectPassDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
