import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPreguntados } from './ranking-preguntados';

describe('RankingPreguntados', () => {
  let component: RankingPreguntados;
  let fixture: ComponentFixture<RankingPreguntados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingPreguntados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingPreguntados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
