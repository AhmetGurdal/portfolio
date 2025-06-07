import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IProject } from '../../pages/projects/projects.component';
import { ProjectDetailButtonComponent } from '../project-detail-button/project-detail-button.component';

@Component({
  selector: 'app-project',
  imports: [ProjectDetailButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  @Input() project!: IProject;
  @Input() slug!: string;
  @Output() openProjectModal = new EventEmitter<string>();
  @Output() toProjectDetail = new EventEmitter<string>();

  isHover = false;
  isLinksDisplayed = false;
  isOneColumn = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isOneColumn = event.target.innerWidth < 1050;
    this.isMobile = event.target.innerWidth < 768;
  }
  openVideo() {
    this.isHover = true;
  }

  closeVideo() {
    this.isHover = false;
  }

  openLinks() {
    this.isLinksDisplayed = true;
  }

  closeLinks(event: MouseEvent | TouchEvent) {
    event.stopPropagation();
    this.isLinksDisplayed = false;
  }

  toggleLinks() {
    this.isLinksDisplayed = !this.isLinksDisplayed;
    this.isHover = !this.isHover;
  }

  ngOnInit(): void {
    this.isOneColumn = window.innerWidth < 1050;
    this.isMobile = window.innerWidth < 768;
  }
}
