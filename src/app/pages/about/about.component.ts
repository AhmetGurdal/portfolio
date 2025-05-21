import { Component } from '@angular/core';
import { ResumeModalComponent } from '../../components/resume-modal/resume-modal.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { DownloadButtonComponent } from '../../components/download-button/download-button.component';

@Component({
  selector: 'app-about',
  imports: [
    ResumeModalComponent,
    SocialLinksComponent,
    DownloadButtonComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // resume_images = ['/resume/1.png', '/resume/2.png', '/resume/3.png'];
  resume_images = ['resume/1.png', 'resume/2.png'];
  current_index = 0;
  onClick(index: number) {
    this.current_index = index;
    this.openModal();
  }
  show_modal = false;

  openModal() {
    this.show_modal = true;
  }

  closeModal() {
    this.show_modal = false;
  }

  downloadPDFLink() {
    const a = document.createElement('a');
    a.target = '_target';
    a.href = 'resume/AhmetGurdal.pdf';
    a.download = 'AhmetGurdal_Resume.pdf';
    a.click();
  }
}
