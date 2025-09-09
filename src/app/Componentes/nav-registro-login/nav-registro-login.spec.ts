import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRegistroLogin } from './nav-registro-login';

describe('NavRegistroLogin', () => {
  let component: NavRegistroLogin;
  let fixture: ComponentFixture<NavRegistroLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRegistroLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRegistroLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
