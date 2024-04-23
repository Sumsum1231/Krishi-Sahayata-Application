import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-insurance-form',
  templateUrl: './apply-insurance-form.component.html',
  styleUrl: './apply-insurance-form.component.css'
})
export class ApplyInsuranceFormComponent {
  isEnglishDisplayed: boolean = true;

  translate(): void {
    this.isEnglishDisplayed = !this.isEnglishDisplayed;
  }

  getButtonText(): string {
    return this.isEnglishDisplayed ? 'ଓଡ଼ିଆ' : 'English';
  }

}
