import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

// Custom Validators
function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';
  if (!value) return null;
  if (!/^[a-zA-Z]/.test(value)) {
    return { startsWithLetter: true };
  }
  if (!/^[a-zA-Z0-9]+$/.test(value)) {
    return { alphanumericOnly: true };
  }
  if (value.length < 8) {
    return { minLength: true };
  }
  return null;
}

function dobAgeValidator(control: AbstractControl): ValidationErrors | null {
  const value: Date = control.value;
  if (!value) return null;
  const cutoffYear = 2006;
  const birthYear = new Date(value).getFullYear();
  if (birthYear > cutoffYear) {
    return { tooYoung: true };
  }
  return null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  isDarkMode = signal(false);
  showPassword = signal(false);
  isSubmitting = signal(false);
  submitted = signal(false);

  registrationForm!: FormGroup;

  readonly maxDob = new Date(2006, 11, 31); // Dec 31, 2006
  readonly minDob = new Date(1920, 0, 1);

  readonly events = [
    { value: 'angular-conf-2026', label: 'Angular Conference 2026' },
    { value: 'ng-summit', label: 'NG Summit' },
    { value: 'devfest', label: 'Google DevFest' },
    { value: 'material-workshop', label: 'Material Design Workshop' },
    { value: 'web-innovations', label: 'Web Innovations Expo' },
  ];

  readonly tShirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      dateOfBirth: ['', [Validators.required, dobAgeValidator]],
      phone: ['', [Validators.pattern(/^\+?[0-9\s\-()]{7,15}$/)]],
      event: ['', Validators.required],
      gender: ['', Validators.required],
      tShirtSize: [''],
      agreeToTerms: [false, Validators.requiredTrue],
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update(v => !v);
    if (this.isDarkMode()) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }

  get f() {
    return this.registrationForm.controls;
  }

  getPasswordError(): string {
    const ctrl = this.f['password'];
    if (ctrl.hasError('required')) return 'Password is required.';
    if (ctrl.hasError('startsWithLetter')) return 'Password must start with a letter.';
    if (ctrl.hasError('alphanumericOnly')) return 'Only letters and numbers are allowed (no spaces or symbols).';
    if (ctrl.hasError('minLength')) return 'Password must be at least 8 characters long.';
    return '';
  }

  getDobError(): string {
    const ctrl = this.f['dateOfBirth'];
    if (ctrl.hasError('required')) return 'Date of birth is required.';
    if (ctrl.hasError('tooYoung')) return 'You must have been born in 2006 or earlier to register.';
    if (ctrl.hasError('matDatepickerMax')) return 'Date must be on or before Dec 31, 2006.';
    return '';
  }

  onSubmit(): void {
    this.submitted.set(true);
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.invalid) {
      this.snackBar.open('Please fix the errors in the form.', 'Dismiss', {
        duration: 4000,
        panelClass: ['error-snackbar'],
      });
      return;
    }

    this.isSubmitting.set(true);
    // Simulate async submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      console.log('Form Data:', this.registrationForm.value);
      this.snackBar.open('🎉 Registration successful! See you at the event!', 'Close', {
        duration: 5000,
        panelClass: ['success-snackbar'],
      });
      this.registrationForm.reset();
      this.submitted.set(false);
    }, 1500);
  }
}
