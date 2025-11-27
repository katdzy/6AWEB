import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  studentName = "Karl Andrei Dungca";
  score = 95;

  imageUrl = "https://www.freeiconspng.com/uploads/spongebob-png-0.png";
  isDisabled = true;

  colSpanValue = 3;
  isPassing = true;

  boxColor = "purple";
  boxSize = "150px";
}
