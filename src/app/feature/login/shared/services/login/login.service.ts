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
  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    let serviceUrl: string = `${this.URL}/login`;
    return this.http.post<LoginResponse>(serviceUrl, loginRequest);
  }
}
