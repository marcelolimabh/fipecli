/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FipeService } from './fipe.service';

describe('FipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FipeService]
    });
  });

  it('should ...', inject([FipeService], (service: FipeService) => {
    expect(service).toBeTruthy();
  }));
});
