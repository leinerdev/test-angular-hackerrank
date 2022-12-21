import { UserData } from '@feature/users/create-user/shared/interfaces/user.interface';
import { FilterUserByNamePipe } from './filter-user-by-name.pipe';

describe('FilterUserByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterUserByNamePipe();
    expect(pipe).toBeTruthy();
  });

  // =========== Tests opcionales =========== //
  it('No debe filtrar con menos de 3 letras', () => {
    // ========== Arrange ========== //
    const pipe = new FilterUserByNamePipe();
    const usersOfTest: UserData[] = [
      {
        id: 1,
        first_name: 'Leiner Jose',
        last_name: 'Barrios Medina',
        email: 'leinerbarrios99.ljbm@gmail.com',
        avatar: '...'
      }
    ];

    // ========== Act ========== //
    const result = pipe.transform(usersOfTest, 'lE');

    // ========== Assert ========== //
    expect(result).toEqual(usersOfTest);
  });

  it('Retornar dos usuarios si 3 letras de sus nombres son comunes', () => {
    // ========== Arrange ========== //
    const pipe = new FilterUserByNamePipe();
    const usersOfTest: UserData[] = [
      {
        id: 1,
        first_name: 'Leiner Jose',
        last_name: 'Barrios Medina',
        email: 'leinerbarrios99.ljbm@gmail.com',
        avatar: '...'
      },
      {
        id: 2,
        first_name: 'Leila Maria',
        last_name: 'Pérez',
        email: 'leila.perez@gmail.com',
        avatar: '...'
      },
      {
        id: 3,
        first_name: 'Carlos',
        last_name: 'Rodríguez',
        email: 'carlos123@gmail.com',
        avatar: '...'
      }
    ];
    const usersToReturn: UserData[] = [
      {
        id: 1,
        first_name: 'Leiner Jose',
        last_name: 'Barrios Medina',
        email: 'leinerbarrios99.ljbm@gmail.com',
        avatar: '...'
      },
      {
        id: 2,
        first_name: 'Leila Maria',
        last_name: 'Pérez',
        email: 'leila.perez@gmail.com',
        avatar: '...'
      }
    ]

    // ========== Act ========== //
    const result = pipe.transform(usersOfTest, 'lEi');

    // ========== Assert ========== //
    expect(result).toEqual(usersToReturn);
  });
});
