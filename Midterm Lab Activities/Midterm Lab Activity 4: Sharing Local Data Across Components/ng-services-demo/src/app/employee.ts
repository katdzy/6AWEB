import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
  return [
  {
    id: 101,
    firstname: 'Karl Andrei',
    lastname: 'Dungca',
    email: 'ktdungca@hau.edu.ph'
  },
  {
    id: 102,
    firstname: 'Lebron',
    lastname: 'James',
    email: 'lebrnjms@hau.edu.ph'
  },
  {
    id: 103,
    firstname: 'John',
    lastname: 'Cena',
    email: 'jcena@hau.edu.ph'
  },
  {
    id: 104,
    firstname: 'Robert',
    lastname: 'House',
    email: 'rbhouse@hau.edu.ph'
  }
];
  }
}
