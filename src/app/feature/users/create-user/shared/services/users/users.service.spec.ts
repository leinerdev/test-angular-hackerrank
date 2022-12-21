import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UserData } from '../../interfaces/user.interface';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(UsersService);
  });

  // ========== Tests opcionales ========== //
  it('should be creaetd', () => {
    expect(service).toBeTruthy();
  });

  it('Debe traer información de George', () => {
    // Arrange
    const george: UserData = {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://reqres.in/img/faces/1-image.jpg',
    };

    // Act
    service.getUsers()
      .then((users: UserData[]) => {
        // Assert
        expect(users[0]).toEqual(george)
      }).catch(error => console.log(error))
  });

  it('El último usuario de la lista debe ser Tracey Ramos', () => {
    // Arrange
    const tracey: UserData = {
      id: 6,
      email: 'tracey.ramos@reqres.in',
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar: 'https://reqres.in/img/faces/6-image.jpg',
    }

    // Act
    service.getUsers()
      .then((users: UserData[]) => {
        // Assert
        expect(users[users.length]).toEqual(tracey)
      }).catch(error => console.log(error))
  });

});
