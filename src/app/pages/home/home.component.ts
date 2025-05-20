import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

@Component({
  selector: 'app-welcome',
  imports: [RouterOutlet, SocialLinksComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  buttons = [
    {
      icon: 'verified',
      link: '/certifications',
      title: 'Certifications',
      subtitle: 'See my qualifications and credentials.',
    },
    {
      icon: 'build',
      link: '/projects',
      title: 'Projects',
      subtitle: "Explore apps and software I've built.",
    },
    {
      icon: 'person',
      link: '/about',
      title: 'About Me',
      subtitle: 'Learn about my background and skills.',
    },
  ];
}
