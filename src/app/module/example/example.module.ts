import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class ExampleModule { }
