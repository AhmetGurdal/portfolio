import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CertificatesComponent } from './pages/certifications/certifications.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routing_items = [
  {
    routeLink: '',
    label: 'Home',
  },
  {
    routeLink: 'certifications',
    label: 'Certifications',
  },
  {
    routeLink: 'projects',
    label: 'Projects',
  },
  {
    routeLink: 'about',
    label: 'About',
  },
];

export const routes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'certifications', component: CertificatesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
];
