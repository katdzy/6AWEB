import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingDemoComponent} from './data-binding-demo/data-binding-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_data_binding';
}

