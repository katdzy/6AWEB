import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'

})

export class DataBindingDemoComponent {
  title = "My First App!"
  description = "This is my new Angular Application"

  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif'
  w = 50;
  h = 50;
  altText = 'Angular Logo';
  textColor = 'blue';
  isHighlighted = true;
  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
