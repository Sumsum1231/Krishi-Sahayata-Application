import { Component } from '@angular/core';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.component.html',
  styleUrl: './complain-form.component.css'
})
export class ComplainFormComponent {
  isEnglishDisplayed: boolean = true;

  translate(): void {
    this.isEnglishDisplayed = !this.isEnglishDisplayed;
  }

  getButtonText(): string {
    return this.isEnglishDisplayed ? 'ଓଡ଼ିଆ' : 'English';
  }

}
