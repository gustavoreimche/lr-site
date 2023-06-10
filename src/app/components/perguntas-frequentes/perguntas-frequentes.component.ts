import { Component } from '@angular/core';

@Component({
  selector: 'app-perguntas-frequentes',
  templateUrl: './perguntas-frequentes.component.html',
  styleUrls: ['./perguntas-frequentes.component.css'],
})
export class PerguntasFrequentesComponent {
  accordionItems: any[] = [
    {
      title: 'ONDE RECEBEREI O TREINAMENTO?',
      content:
        'Você receberá o acesso a nossa área de membros exclusivas para as alunas no e-mail usado pra compra, através da plataforma da Hotmart',
      isOpen: true,
    },
    {
      title: 'QUAIS AS FORMAS DE PAGAMENTO?',
      content:
        'Todas as formas de pagamento disponíveis pela Hotmart, INCLUSIVE INTERNACIONAL Todas as formas são amplamente seguras e garantem acesso instantâneo ao treinamento.',
      isOpen: true,
    },
    {
      title: 'DURANTE QUANTO TEMPO PODEREI ASSISTIR O TREINAMENTO?',
      content:
        'O treinamento ficará disponível por 8 meses. O que é tempo suficiente para estudar, aplicar e ter resultados.',
      isOpen: true,
    },
    {
      title: 'TEREI ALGUM TIPO DE SUPORTE?',
      content:
        'Sim! Dentro da plataforma, você pode enviar suas dúvidas e elas serão respondidas. Temos também um grupo de alunas no Telegram, onde você poderá interagir e tirar suas dúvidas.',
      isOpen: true,
    },
  ];

  toggleAccordion(index: number): void {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }
}
