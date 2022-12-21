import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';

import { SharedModule } from '@shared/shared.module';

import { CreateUserComponent } from './create-user/create-user.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    CreateUserComponent,
    HomeUserComponent,
    ListUsersComponent,
    NavBarComponent,
    FilterUserByNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule,
  ],
  providers: [
    FilterUserByNamePipe
  ]
})
export class UsersModule {
}
