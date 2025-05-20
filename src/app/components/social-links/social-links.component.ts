import { Component } from '@angular/core';
import { SocialLinkComponent } from '../social-link/social-link.component';

@Component({
  selector: 'app-social-links',
  imports: [SocialLinkComponent],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {}
