import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStatusComponent } from './form-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormStatusComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subscriptionForm: FormGroup;
  submitted = false;
  formValues: any = null;

  subscriptionOptions = [
    { value: 'Basic', label: 'Basic' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Pro', label: 'Pro' }
  ];

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subscription: ['Advanced', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  // Getter methods for easy access to form controls
  get email() {
    return this.subscriptionForm.get('email');
  }

  get subscription() {
    return this.subscriptionForm.get('subscription');
  }

  get password() {
    return this.subscriptionForm.get('password');
  }

  // Check if field is invalid and touched
  isFieldInvalid(field: string): boolean {
    const formControl = this.subscriptionForm.get(field);
    return !!(formControl && formControl.invalid && formControl.touched);
  }

  // Check if form is invalid and touched
  isFormInvalid(): boolean {
    return this.subscriptionForm.invalid && this.subscriptionForm.touched;
  }

  // Submit form handler
  onSubmit(): void {
    this.submitted = true;

    if (this.subscriptionForm.valid) {
      this.formValues = this.subscriptionForm.value;
      console.log('Form Value:', this.formValues);
      console.log('Email:', this.formValues.email);
      console.log('Subscription:', this.formValues.subscription);
      console.log('Password:', this.formValues.password);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.subscriptionForm.controls).forEach(key => {
        this.subscriptionForm.get(key)?.markAsTouched();
      });
      console.warn('Form is invalid. Please check all fields.');
    }
  }

  // Get specific error message for a field
  getErrorMessage(field: string): string {
    const control = this.subscriptionForm.get(field);
    if (!control || !control.errors) {
      return '';
    }

    if (field === 'email') {
      if (control.errors['required']) {
        return 'Email address is required';
      }
      if (control.errors['email']) {
        return 'Please enter a valid email address';
      }
    }

    if (field === 'password') {
      if (control.errors['required']) {
        return 'Password is required';
      }
    }

    if (field === 'subscription') {
      if (control.errors['required']) {
        return 'Please select a subscription';
      }
    }

    return 'This field is invalid';
  }
}
