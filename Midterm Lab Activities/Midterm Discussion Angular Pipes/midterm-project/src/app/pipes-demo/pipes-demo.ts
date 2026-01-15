import { Component, OnInit } from '@angular/core';
import {
  DatePipe,
  UpperCasePipe,
  LowerCasePipe,
  AsyncPipe,
  CurrencyPipe,
  SlicePipe,
  DecimalPipe,
  PercentPipe,
  TitleCasePipe,
  JsonPipe,
} from '@angular/common';

import { interval, map } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    AsyncPipe,
    CurrencyPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    TitleCasePipe,
    JsonPipe,
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  successRate = 0.7462;
  errorRate = 0.03489;
  tinyValue = 0.007812;

  randomText = 'angular pipes are powerful and fun';
  componentName = 'user-profile-dashboard';

  user = {
    id: 1001,
    name: 'Maria Santos',
    age: 28,
    roles: ['admin', 'editor'],
    lastLogin: new Date(),
    preferences: { theme: 'dark', language: 'fil-PH' },
  };

  time$ = interval(1000).pipe(map(() => new Date()));
  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];
  price: number = 20000;

  ngOnInit() {}
}
