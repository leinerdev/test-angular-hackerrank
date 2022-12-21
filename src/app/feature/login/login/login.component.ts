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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  async onLogin() {
    try {
      const loginForm = this.loginForm.value;
      const loginResponse = await this.loginService.login(loginForm);
      localStorage.setItem('token', loginResponse.token);
      this.redirectUsers();
    } catch (errorJson) {
      // this.loginForm.markAllAsTouched();
      const { error } = errorJson;
      this.error = error.error;
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
