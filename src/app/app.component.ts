import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('appContainer') appContainer!: ElementRef;


  handleOpacityChange(opacity: number) {
    if (opacity === 0) {
      setTimeout(() => {
        this.appContainer.nativeElement.classList.add('fadeInBackground');
      }, 3000);
    } else {
      this.appContainer.nativeElement.classList.remove('fadeInBackground');
    }
  }
}
