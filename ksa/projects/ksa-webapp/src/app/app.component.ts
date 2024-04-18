import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Import the 'Router' class from the correct package

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ksa-webapp';
  constructor(private router: Router) { }

  navigateToForm() {
    this.router.navigate(['/complain-form']); // Navigate to the 'dashboard' route
  }
}
