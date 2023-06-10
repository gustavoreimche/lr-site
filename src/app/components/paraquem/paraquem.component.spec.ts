import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaquemComponent } from './paraquem.component';

describe('ParaquemComponent', () => {
  let component: ParaquemComponent;
  let fixture: ComponentFixture<ParaquemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParaquemComponent]
    });
    fixture = TestBed.createComponent(ParaquemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
