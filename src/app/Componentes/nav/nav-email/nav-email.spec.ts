import { TestBed } from '@angular/core/testing';

import { NavEmail } from './nav-email';

describe('NavEmail', () => {
  let service: NavEmail;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavEmail);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
