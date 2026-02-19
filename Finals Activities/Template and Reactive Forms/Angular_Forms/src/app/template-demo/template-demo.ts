import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemo {
  title = 'Template Driven Demo';

  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  isPermanent = false;
  comments = '';

  submitted = false;
  status = '';

  onSubmit() {
    this.submitted = true;
    this.status = this.isPermanent ? 'Permanent' : 'Probationary';

    console.log('Form Submitted!', {
      username: this.username,
      email: this.email,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments
    });
  }
}
