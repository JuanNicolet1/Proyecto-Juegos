import { TestBed } from '@angular/core/testing';

import { NavRol } from './nav-rol';

describe('NavEmail', () => {
  let service: NavRol;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavRol);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
