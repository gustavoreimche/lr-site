import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosAlunasComponent } from './resultados-alunas.component';

describe('ResultadosAlunasComponent', () => {
  let component: ResultadosAlunasComponent;
  let fixture: ComponentFixture<ResultadosAlunasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosAlunasComponent]
    });
    fixture = TestBed.createComponent(ResultadosAlunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
