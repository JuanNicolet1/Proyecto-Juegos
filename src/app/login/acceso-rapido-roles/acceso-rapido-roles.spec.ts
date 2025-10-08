import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoRapidoRoles } from './acceso-rapido-roles';

describe('AccesoRapidoRoles', () => {
  let component: AccesoRapidoRoles;
  let fixture: ComponentFixture<AccesoRapidoRoles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoRapidoRoles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoRapidoRoles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
