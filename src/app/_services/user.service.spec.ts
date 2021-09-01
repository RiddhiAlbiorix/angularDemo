import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });
  httpClient = TestBed.inject(HttpClient);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
