import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts() {
  return [
  {
    prod_id: 'P-101',
    prod_name: 'Logitech Mouse',
    desc: '6 Button Mechanical Mouse',
    price: 899.00
  },
  {
    prod_id: 'P-102',
    prod_name: 'JBL BT Speaker',
    desc: 'Waterproof Radio 360 Surround',
    price: 1099.00
  },
  {
    prod_id: 'P-103',
    prod_name: 'Mechanical Keyboard',
    desc: 'Hot-swappable RGB Backlit',
    price: 2395.00
  },
  {
    prod_id: 'P-104',
    prod_name: 'Oculus Meta',
    desc: 'All-in-one Gaming Headset',
    price: 22450.00
  }
];
  }
}
