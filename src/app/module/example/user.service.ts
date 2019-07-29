import { Injectable } from '@angular/core';
import { User } from '../../share/model/user';
import { USERS } from '../../share/mock/mock-users';
import { Observable, of} from 'rxjs';
import { MessageService } from '../../share/service/message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }
  getUsers(): Observable<User[]>{
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
}
