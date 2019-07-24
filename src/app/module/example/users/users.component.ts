import { Component, OnInit } from '@angular/core';
import { User } from '../../../share/model/user';
import { USERS } from '../../../share/mock/mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'root'
  };
  users = USERS;
  selectedUser: User;




  constructor() { }
  
  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  } 



}
