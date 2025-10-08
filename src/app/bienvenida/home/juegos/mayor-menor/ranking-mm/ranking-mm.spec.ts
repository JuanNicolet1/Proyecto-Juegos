import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingMm } from './ranking-mm';

describe('RankingMm', () => {
  let component: RankingMm;
  let fixture: ComponentFixture<RankingMm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingMm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingMm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
