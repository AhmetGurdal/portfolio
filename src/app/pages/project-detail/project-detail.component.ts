import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject, IProjectBlock } from '../projects/projects.component';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';

@Component({
  selector: 'app-project-detail',
  imports: [ImageModalComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  slug: string = '';
  constructor(private route: ActivatedRoute) {}
  projects: { [key: string]: IProject } = {};
  project: IProject | null = null;
  blocks: IProjectBlock[] = [];
  showImageModal = false;
  imageUrl = '';
  openModal(url: string) {
    this.imageUrl = url;
    this.showImageModal = true;
  }
  closeModal() {
    this.showImageModal = false;
  }

  async ngOnInit(): Promise<void> {
    this.slug = this.route.snapshot.paramMap.get('id')!;
    this.projects = await fetch('data/projects.json')
      .then((e) => e.json())
      .then((e: { [key: string]: IProject }) => e);
    this.project = this.projects[this.slug];
    this.blocks = this.project.long_description.blocks;
  }
}
