import { TestBed } from '@angular/core/testing';

import { AutoLogin } from './auto-login';

describe('AutoLogin', () => {
  let service: AutoLogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoLogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
