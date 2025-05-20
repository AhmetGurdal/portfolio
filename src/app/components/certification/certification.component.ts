import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICertification } from '../../pages/certifications/certifications.component';

@Component({
  selector: 'app-certification',
  imports: [],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.scss',
})
export class CertificationComponent {
  @Input({ required: true }) certification!: ICertification;
  @Output() openModal = new EventEmitter<string>();

  _openModal(url: string) {
    this.openModal.emit(url);
  }
}
