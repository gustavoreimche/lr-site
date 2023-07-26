import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['pt', 'esp']);
    if (localStorage.getItem('lang')) {
      this.translate.setDefaultLang(localStorage.getItem('lang') as string);
    }
  }

  @Output() inscricaoClick = new EventEmitter();

  isMobile: boolean = false;
  lang: string = (localStorage.getItem('lang') as string) ?? 'pt';

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  onInscricaoClick(): void {
    console.log('Inscricao clicked');
    this.inscricaoClick.emit();
  }

  changeLang(): void {
    localStorage.setItem('lang', this.lang);
    this.translate.use(this.lang);
  }
}
