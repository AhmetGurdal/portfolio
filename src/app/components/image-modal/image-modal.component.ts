import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-image-modal',
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss',
})
export class ImageModalComponent {
  @Input() imageUrl: string = '';
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

  isZoomed = false;
  isZoomout = false;
  isDragging = false;
  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;
  translateX = 0;
  translateY = 0;
  currentX = 0;
  currentY = 0;
  zoomScale = 3;

  toggleZoom(event: MouseEvent): void {
    if (!this.isDragging) {
      if (!this.isZoomout) {
        this.isZoomed = true;
      }
      this.isZoomout = false;
      if (!this.isZoomed) {
        this.translateX = 0;
        this.translateY = 0;
        this.currentX = 0;
        this.currentY = 0;
      }
    } else {
      this.isDragging = false;
      document.querySelector('.image-container')?.classList.remove('dragging');
    }
  }

  onMouseDown(event: MouseEvent): void {
    if (!this.isZoomed) return;

    this.isDragging = true;
    this.startX = event.clientX - this.translateX;
    this.startY = event.clientY - this.translateY;
    (event.currentTarget as HTMLElement).classList.add('dragging');
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    this.endX = event.clientX - this.translateX;
    this.endY = event.clientY - this.translateY;

    this.translateX = event.clientX - this.startX;
    this.translateY = event.clientY - this.startY;
  }

  onMouseUp(): void {
    this.isDragging = false;
    if (
      Math.abs(this.startX - this.endX) > 5 &&
      Math.abs(this.startY - this.endY) > 5 &&
      this.isZoomed
    ) {
      this.isZoomed = false;
      this.isZoomout = true;
    }
    // console.log(this.startX, ' - ', this.translateX);
    // console.log(this.startY, ' - ', this.translateY);
    // document.querySelector('.image-container')?.classList.remove('dragging');
  }

  // Touch Events
  onTouchStart(event: TouchEvent): void {
    if (!this.isZoomed || event.touches.length !== 1) return;

    this.isDragging = true;
    const touch = event.touches[0];
    this.startX = touch.clientX - this.translateX;
    this.startY = touch.clientY - this.translateY;
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging || event.touches.length !== 1) return;

    const touch = event.touches[0];
    this.endX = touch.clientX - this.translateX;
    this.endY = touch.clientY - this.translateY;
    this.translateX = touch.clientX - this.startX;
    this.translateY = touch.clientY - this.startY;
    event.preventDefault();
  }

  onTouchEnd(): void {
    this.isDragging = false;
    if (
      Math.abs(this.startX - this.endX) > 5 &&
      Math.abs(this.startY - this.endY) > 5 &&
      this.isZoomed
    ) {
      this.isZoomed = false;
      this.isZoomout = true;
    }
  }

  ///////

  getImageStyle(): { [key: string]: string } {
    if (!this.isZoomed) {
      return { transform: 'scale(1)' };
    }

    return {
      transform: `scale(${this.zoomScale}) translate(${
        this.translateX / this.zoomScale
      }px, ${this.translateY / this.zoomScale}px)`,
    };
  }
}
