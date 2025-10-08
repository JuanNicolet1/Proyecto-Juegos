import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingBn } from './ranking-bn';

describe('RankingBn', () => {
  let component: RankingBn;
  let fixture: ComponentFixture<RankingBn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingBn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingBn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
