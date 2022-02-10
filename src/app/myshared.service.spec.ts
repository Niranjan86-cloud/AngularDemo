import { TestBed } from '@angular/core/testing';

import { MysharedService } from './myshared.service';

describe('MysharedService', () => {
  let service: MysharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
