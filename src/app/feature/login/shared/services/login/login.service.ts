import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private URL: string = environment.API;
  constructor(private http: HttpClient) {}

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(loginRequest: LoginRequest): Promise<any> {
    let serviceUrl: string = `${this.URL}/login`;
    const promise = new Promise((resolve, reject) => {
      this.http.post(serviceUrl, loginRequest).toPromise().then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error)
      })
    });

    return promise;

  }
}
