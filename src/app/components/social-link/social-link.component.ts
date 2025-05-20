import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-link',
  imports: [CommonModule],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss',
})
export class SocialLinkComponent {
  @Input() href: string = '';
  @Input() type: 'Github' | 'X' | 'Youtube' | 'Linkedin' = 'Github';
}
