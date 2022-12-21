import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from '@feature/users/create-user/shared/interfaces/user.interface';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users: UserData[] = [], filter = ''): UserData[] {
    if (filter.length > 2) {
      return users.filter((user: UserData) =>
        user.first_name.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    return users;
  }

}
