import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routing_items } from '../../app.routes';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  items = routing_items;
}
