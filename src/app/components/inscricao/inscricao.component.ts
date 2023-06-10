import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';

interface InscricaoModel {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css'],
})
export class InscricaoComponent {
  inscricao: InscricaoModel = {
    name: '',
    email: '',
    phone: '',
  };
  constructor(
    private breakpointObserver: BreakpointObserver,
    private firestore: Firestore
  ) {}
  isMobile: boolean = false;

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  add() {
    const conectionRef = collection(this.firestore, 'inscricao');
    return addDoc(conectionRef, this.inscricao);
  }

  async onSubmit(event: Event) {
    const result = await this.add();
    alert('Inscrição realizada com sucesso!');
    console.log(result.id);
    this.inscricao = {
      name: '',
      email: '',
      phone: '',
    };
  }
}
