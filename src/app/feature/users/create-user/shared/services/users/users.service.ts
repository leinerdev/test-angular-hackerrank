import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  httpOptions: any;
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

  deleteUserForIndex(index: number): Promise<any> {
    let serviceUrl: string = `${this.URL}/users/${index}`;
    this.generateRequestParams({
      'Autorization': this.token
    });
    const promise = new Promise<any>((resolve, reject) => {
      this.http.delete(serviceUrl, this.httpOptions).toPromise().then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  private generateRequestParams(param: any) {
    this.httpOptions = {
      header: new HttpHeaders(),
      params: param,
    };
  }
}
