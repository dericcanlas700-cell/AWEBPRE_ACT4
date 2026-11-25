import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little Something About Me';
  description = 'I am a student at Holy Angel University learning to build modern web applications with Angular and other programming languages.';
}
