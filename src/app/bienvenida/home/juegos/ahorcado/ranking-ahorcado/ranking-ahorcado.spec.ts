import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAhorcado } from './ranking-ahorcado';

describe('RankingAhorcado', () => {
  let component: RankingAhorcado;
  let fixture: ComponentFixture<RankingAhorcado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingAhorcado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingAhorcado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
