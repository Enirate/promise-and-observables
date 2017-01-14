/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObserveService } from './observe.service';

describe('Service: Observe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObserveService]
    });
  });

  it('should ...', inject([ObserveService], (service: ObserveService) => {
    expect(service).toBeTruthy();
  }));
});
