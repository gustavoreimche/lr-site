import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('inscricaoSection', { static: true, read: ElementRef })
  inscricaoSection!: ElementRef;
  title = 'lr-site';

  scrollToInscricao(): void {
    console.log('Scrolling to contact');
    this.inscricaoSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
