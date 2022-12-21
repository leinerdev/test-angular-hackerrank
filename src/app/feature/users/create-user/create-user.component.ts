import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;
  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
    private userService: UsersService,
  ) {
  }
  ngOnInit(): void {
    this.initCreateUserForm();
  }

  async createUser() {
    try {
      const promise = await this.userService.createUser(this.createUserForm.value);
      this.redirectToListUsers();
    } catch (errorJson) {
      const { error } = errorJson;
      console.log(error);
    }

  }

  initCreateUserForm() {
    this.createUserForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
