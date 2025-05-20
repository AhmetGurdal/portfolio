import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from '../../pages/projects/projects.component';
import { ProjectDetailButtonComponent } from '../project-detail-button/project-detail-button.component';

@Component({
  selector: 'app-project',
  imports: [ProjectDetailButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() project!: IProject;
  @Input() slug!: string;
  @Output() openProjectModal = new EventEmitter<string>();
  @Output() toProjectDetail = new EventEmitter<string>();

  isHover = false;

  onMouseEnter() {
    this.isHover = true;
  }

  onMouseLeave() {
    this.isHover = false;
  }
}
