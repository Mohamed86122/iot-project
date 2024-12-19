import { TestBed } from '@angular/core/testing';

import { Dht11Service } from './dht11.service';

describe('Dht11Service', () => {
  let service: Dht11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dht11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
