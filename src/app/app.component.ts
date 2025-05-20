import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  isMenuCollapsed = signal<boolean>(true);
  constructor(private router: Router) {}

  changeIsMenuCollapsed(value: boolean): void {
    this.isMenuCollapsed.set(value);
  }

  isHeadLess(): boolean {
    return this.router.url === '/' || this.router.url === '/welcome';
  }
}
