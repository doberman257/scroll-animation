import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  @Output() opacityChange = new EventEmitter<number>();

  marginSize = 10;
  widthHeight = 100;
  opacity = 100;
  rotationDegree = 0


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.marginSize = 10 + scrollPosition / 5;
    this.widthHeight = 100 + scrollPosition / 3;

    this.opacity = Math.max(0, 100 - scrollPosition / 5);
    this.opacity = Math.min(100, this.opacity);

    this.opacityChange.emit(this.opacity);

    this.marginSize = Math.max(10, this.marginSize);
    this.marginSize = Math.min(100, this.marginSize);

    this.rotationDegree = scrollPosition;
  }
}
