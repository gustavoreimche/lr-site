import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  @Output() inscricaoClick = new EventEmitter();

  isMobile: boolean = false;

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  onInscricaoClick(): void {
    console.log('Inscricao clicked');
    this.inscricaoClick.emit();
  }
}
