import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css'
})
export class CustomForm {
  projectForm: FormGroup;
  submitted = false;
  dataSummary: any = null;

  categories = ['Web Development', 'Mobile App', 'UI/UX Design', 'Data Science'];

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      deadline: ['', Validators.required],
      budget: [500, [Validators.required, Validators.min(100)]],
      priority: ['Medium'],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.submitted = true;
      this.dataSummary = { ...this.projectForm.value };
      console.log('Project Proposal Data:', this.dataSummary);
    } else {
      this.projectForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.projectForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }

  resetForm() {
    this.submitted = false;
    this.dataSummary = null;
    this.projectForm.reset({
      budget: 500,
      priority: 'Medium',
      agreeToTerms: false
    });
  }
}
