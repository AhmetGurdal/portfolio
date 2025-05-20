import { Component, OnInit } from '@angular/core';
// import Swiper from 'swiper';
// import { register } from 'swiper/element/bundle';
import { CertificationCategoryComponent } from '../../components/certification-category/certification-category.component';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';

export interface ICertification {
  name: string;
  issuer: string;
  dateIssued: string;
  link: string;
  imageUrl: string;
  category: string;
}

// register();
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  imports: [CertificationCategoryComponent, ImageModalComponent],
})
export class CertificatesComponent implements OnInit {
  certifications: ICertification[] = [];
  categories: string[] = [
    'general',
    'python',
    'java',
    'javascript',
    'c',
    'cs',
    'database',
    'css',
    // 'cpp',
    // 'go',
  ];
  isCategoryOpen = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    // false,
    // false,
  ];
  openIndex = 0;
  imageUrl = '';
  showCertificateModal = false;

  openCertificateModal(url: string) {
    this.imageUrl = url;
    this.showCertificateModal = true;
  }

  closeCertificateModal() {
    this.showCertificateModal = false;
  }

  async ngOnInit(): Promise<void> {
    this.certifications = await fetch('/data/certificates.json')
      .then((e) => e.json())
      .then((e: ICertification[]) => e);
  }

  filterCategories(category: string) {
    return this.certifications.filter((el) => el.category === category);
  }

  onCategoryChange(index: number) {
    this.isCategoryOpen[this.openIndex] = false;
    this.isCategoryOpen[index] = true;
    this.openIndex = index;
  }

  ngAfterViewInit(): void {
    // Initialize Swiper after the view is initialized
    // this.swiper = new Swiper('.swiper-container', {
    //   slidesPerView: 2, // Display all slides in a row
    //   spaceBetween: 10, // Spacing between slides
    //   mousewheel: {
    //     forceToAxis: true,
    //   },
    // });
  }
}
