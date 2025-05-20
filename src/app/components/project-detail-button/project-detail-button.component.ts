import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-detail-button',
  imports: [],
  templateUrl: './project-detail-button.component.html',
  styleUrl: './project-detail-button.component.scss',
})
export class ProjectDetailButtonComponent {
  @Input() text!: string | '';
  @Output() onClick = new EventEmitter<null>();
}
