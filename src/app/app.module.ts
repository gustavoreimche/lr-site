import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { ResultadosAlunasComponent } from './components/resultados-alunas/resultados-alunas.component';
import { ParaquemComponent } from './components/paraquem/paraquem.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { GarantiaComponent } from './components/garantia/garantia.component';
import { CertificadoComponent } from './components/certificado/certificado.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { PerguntasFrequentesComponent } from './components/perguntas-frequentes/perguntas-frequentes.component';
import { PerguntasFooterComponent } from './components/perguntas-footer/perguntas-footer.component';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrazilComponent } from './components/flags/brazil.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DepoimentosComponent,
    ApresentacaoComponent,
    ResultadosAlunasComponent,
    ParaquemComponent,
    ConteudoComponent,
    GarantiaComponent,
    CertificadoComponent,
    InscricaoComponent,
    PagamentoComponent,
    PerguntasFrequentesComponent,
    PerguntasFooterComponent,
    BrazilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAccordionModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    NgxMaskModule.forRoot(maskConfig),
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
