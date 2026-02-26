import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './register/register'; // 1. Import your Register component

@Component({
  selector: 'app-root',
  standalone: true, // Ensure standalone is true
  imports: [
    RouterOutlet,
    Register // 2. Add Register to the imports array
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_mat_demo');
}
