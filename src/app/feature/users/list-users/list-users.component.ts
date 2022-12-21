import { Component, OnInit } from '@angular/core';

import { UserData } from '../create-user/shared/interfaces/user.interface';
import { UsersService } from '../create-user/shared/services/users/users.service';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) {}

  filter: string = '';
  users: UserData[] = []

  ngOnInit(){
    this.getUsers();
  }

  async getUsers() {
    try {
      const response = await this.userService.getUsers();
      const users: UserData[] = response.data;
      this.users = users;
    } catch (error) {
      let { err } = error.response.data;
      console.error(err);
    }
    this.users[0].email = 'george.bluth@reqres.in';
  }

  async deleteUser(id: number, name: string) {
    try {
      const response = await this.userService.deleteUserForIndex(id);
      console.log(response);
      alert(`Deleted user: ${name}`);
    } catch (error) {
      let { err } = error.response.data;
      console.error(err);
    }
  }



}
