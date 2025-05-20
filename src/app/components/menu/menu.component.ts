import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  faCertificate,
  faHome,
  faProjectDiagram,
  faVcard,
} from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs/operators';
import { routing_items } from '../../app.routes';
@Component({
  selector: 'app-menu',
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}
  isMenuCollapsed = input.required<boolean>();
  changeIsMenuCollapsed = output<boolean>();
  faBars = faBars;

  items = routing_items;

  getRoutingIcon(link: string) {
    if (link === '') {
      return faHome;
    } else if (link === 'certifications') {
      return faCertificate;
    } else if (link === 'projects') {
      return faProjectDiagram;
    } else if (link === 'about') {
      return faVcard;
    } else {
      return faHome;
    }
  }

  toggleCollapse(): void {
    this.changeIsMenuCollapsed.emit(!this.isMenuCollapsed());
  }

  closeSidenav(): void {
    this.changeIsMenuCollapsed.emit(true);
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeSidenav();
      });
  }
}
