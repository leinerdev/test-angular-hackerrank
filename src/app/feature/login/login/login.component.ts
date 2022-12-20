import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login/login.service';
import { Subscription } from 'rxjs';
import { LoginResponse } from '../shared/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  error: string = '';
  loginForm: FormGroup;

  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.validateSession();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  async onLogin() {
    try {
      if (this.loginForm.invalid) return;
      const loginForm = this.loginForm.value;
      this.loginService.login(loginForm).subscribe((loginResponse: LoginResponse) => {
        if (loginResponse.token) {
          localStorage.setItem('token', loginResponse.token);
          this.redirectUsers();
        }
      });
    } catch (error) {
      console.log(error);
      let { err } = error.response.data;
      this.error = err;
    }
  }

  validateFieldForm(field: string) {
    return this.loginForm.controls[field].touched && this.loginForm.controls[field].errors;
  }

  validateSession() {
    const token = localStorage.getItem('token');
    if (token) this.redirectUsers();
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
