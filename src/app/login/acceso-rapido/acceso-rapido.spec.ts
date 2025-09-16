import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoRapido } from './acceso-rapido';

describe('AccesoRapido', () => {
  let component: AccesoRapido;
  let fixture: ComponentFixture<AccesoRapido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoRapido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoRapido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
