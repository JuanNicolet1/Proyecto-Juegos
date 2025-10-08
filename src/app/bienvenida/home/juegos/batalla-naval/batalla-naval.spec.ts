import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallaNaval } from './batalla-naval';

describe('BatallaNaval', () => {
  let component: BatallaNaval;
  let fixture: ComponentFixture<BatallaNaval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatallaNaval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatallaNaval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
