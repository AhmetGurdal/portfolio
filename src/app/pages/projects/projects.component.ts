import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjectComponent } from '../../components/project/project.component';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';
import { KeyValuePipe } from '@angular/common';

export interface IProjectBlock {
  type: string;
  value: string | null;
  link: string;
  blocks: IProjectBlock[] | null;
}

export interface IProject {
  name: string;
  short_description: string;
  long_description_file: string | null;
  long_description: { blocks: IProjectBlock[] };
  technologies: string[];
  project_link: string | null;
  link: string | null;
  project_image: string | null;
  project_video: string | null;
}

@Component({
  selector: 'app-projects',
  imports: [RouterModule, ProjectComponent, ImageModalComponent, KeyValuePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) {}

  projects: { [key: string]: IProject } = {};

  imageUrl = '';
  showProjectModal = false;

  openProjectModal(url: string) {
    this.imageUrl = url;
    this.showProjectModal = true;
  }

  closeProjectModal() {
    this.showProjectModal = false;
  }

  toProjectDetail(slug: string) {
    this.router.navigate([`/projects/${slug}`]);
  }

  async ngOnInit(): Promise<void> {
    this.projects = await fetch('/data/projects.json')
      .then((e) => e.json())
      .then((e: { [key: string]: IProject }) => e);
  }
}
