import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  token: string = localStorage.getItem('token');
  private URL: string = environment.API;
  constructor(private http: HttpClient) {}


  getUsers(): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.http.get(`${this.URL}/users`).toPromise().then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    });

    return promise;
  }

  createUser() {

  }

  deleteUserForIndex(index: number) {

  }
}
