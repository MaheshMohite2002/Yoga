import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { IonContent, IonNote, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    if (email === 'admin@yoga.com' && password === 'admin123') {
      this.errorMessage = '';
      this.navCtrl.navigateRoot('/dashboard');
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }

  goToForgotPassword() {
    console.log('Navigating to Forgot Password');
    this.router.navigate(['/forgot-password']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
