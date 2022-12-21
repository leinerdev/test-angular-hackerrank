import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CreateUserRequest, UserResponse } from '../../interfaces/user.interface';

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

  createUser(createUserRequest: CreateUserRequest) {
    let serviceUrl: string = `${this.URL}/users`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.token
      }),
    };
    const promise = new Promise<any>((resolve, reject) => {
      this.http.post(serviceUrl, createUserRequest, httpOptions).toPromise().then((response: UserResponse) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  deleteUserForIndex(index: number): Promise<any> {
    let serviceUrl: string = `${this.URL}/users/${index}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.token
      }),
    };
    const promise = new Promise<any>((resolve, reject) => {
      this.http.delete(serviceUrl, httpOptions).toPromise().then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }
}
