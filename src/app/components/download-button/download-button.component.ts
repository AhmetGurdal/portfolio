import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-download-button',
  imports: [],
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss',
})
export class DownloadButtonComponent {
  @Input() text!: string | '';
  @Input() href!: string | '';
}
