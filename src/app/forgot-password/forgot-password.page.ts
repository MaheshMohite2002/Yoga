import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  forgotForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.forgotForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.invalid) return;

    const email = this.forgotForm.value.email;
    // TODO: Call your API here to send OTP or reset link
    this.successMessage = `Reset link sent to ${email}`;
    this.errorMessage = '';
  }
}
