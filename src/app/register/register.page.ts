import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';

// Optional for Google Sign-In
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private platform: Platform, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    if (this.platform.is('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  onRegister() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      console.log('Registering with:', email, password);
      // call your API here
    }
  }

  registerWithMobile() {
    // Navigate to Mobile OTP verification screen or open a modal
    console.log('Mobile OTP registration initiated');
  }

  async registerWithGoogle() {
    try {
      const user = await GoogleAuth.signIn();
      console.log('Google user:', user);
    } catch (err) {
      console.error('Google login failed:', err);
    }
  }

  async registerWithApple() {
    // Apple login mostly for iOS. On Android it's rarely used unless using Apple services.
    console.warn('Apple Sign-In is limited on Android');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
