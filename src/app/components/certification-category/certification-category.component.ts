import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//https://vecta.io/symbols/239/file-formats/42/js
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ICertification } from '../../pages/certifications/certifications.component';
import { categories } from './certification-categories';
import { CertificationComponent } from '../certification/certification.component';

@Component({
  selector: 'app-certification-category',
  templateUrl: './certification-category.component.html',
  styleUrl: './certification-category.component.scss',
  imports: [FontAwesomeModule, CertificationComponent],
})
export class CertificationCategoryComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  @Input() type: string = 'python';
  @Input() isOpen = false;
  @Input() index: number = 0;
  @Output() onCategoryChange = new EventEmitter<number>();
  @Output() onCertificationImageOpen = new EventEmitter<string>();
  @Input() certificates: ICertification[] = [];

  categories = categories;
  faBars = faBars;
  isHover = false;

  openCategory() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.isHover = false;
      if (this.onCategoryChange) {
        this.onCategoryChange.emit(this.index);
      }
    }
  }

  closeCategory(event: MouseEvent) {
    event.stopPropagation();
    if (this.isOpen) {
      this.isOpen = false;
      if (this.onCategoryChange) {
        this.onCategoryChange.emit(this.index);
      }
    }
    this.cdr.detectChanges();
    console.log(this.isOpen);
  }

  onMouseEnter() {
    if (!this.isOpen) {
      this.isHover = true;
    }
  }

  onMouseLeave() {
    this.isHover = false;
  }
}
