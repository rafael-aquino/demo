import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { AppRoutingModule } from '../../app-routing.module';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [UsersComponent, UserDetailComponent, DashboardComponent, UserSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    UsersComponent
  ]
})
export class ExampleModule { }
