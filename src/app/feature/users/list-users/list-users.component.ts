import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserData } from '../create-user/shared/interfaces/user.interface';
import { UsersService } from '../create-user/shared/services/users/users.service';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  constructor(
    private router: Router,
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
  }

  deleteUser(id: number, name: string) {
    this.userService.deleteUserForIndex(id)
      .then((response) => {
        console.log(response);
        alert(`Deleted user: ${name}`);
        this.router.navigateByUrl('users/list');
      })
      .catch((err) => {
        let { error } = err.response.data;
        console.error(error);
      });
  }



}
