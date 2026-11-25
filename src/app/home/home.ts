import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // The Home page owns all CV data and passes it down to the children.
  fullName = 'Deric Canlas';
  location = 'City of San Fernando, Pampanga';
  email = 'dericcanlas700@gmail.com';
  phone = '0947 790 7037';

  profile = 'I am a student learning in a web development course at Holy Angel University. I enjoy learning new technologies and building useful applications.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node',
    'Express'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
