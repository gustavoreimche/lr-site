import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntasFooterComponent } from './perguntas-footer.component';

describe('PerguntasFooterComponent', () => {
  let component: PerguntasFooterComponent;
  let fixture: ComponentFixture<PerguntasFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerguntasFooterComponent]
    });
    fixture = TestBed.createComponent(PerguntasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
