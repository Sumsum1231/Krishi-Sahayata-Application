import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css'
})
export class FeatureCardComponent {
playSound() {
throw new Error('Method not implemented.');
}

  constructor() { }

  playAudio(): void {
    const audio = new Audio();
    audio.src = './assets/application-status.mp3'; // Path to your audio file
    audio.load();
    audio.play();
  }


  
}


