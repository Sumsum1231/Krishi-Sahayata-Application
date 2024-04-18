import { Component } from '@angular/core';

@Component({
  selector: 'app-carausal',
  templateUrl: './carausal.component.html',
  styleUrl: './carausal.component.css'
})
export class CarausalComponent {
  items = [
    { title: 'Item 1', description: 'Description 1', imageUrl: './assets/farmer-cara0.jpg' },
    { title: 'Item 2', description: 'Description 2', imageUrl: './assets/farmer-cara1.jpg' },
    { title: 'Item 3', description: 'Description 3', imageUrl: './assets/farmer-cara2.jpg' }
  ];


}
