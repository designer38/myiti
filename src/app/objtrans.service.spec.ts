import { TestBed, inject } from '@angular/core/testing';

import { ObjtransService } from './objtrans.service';

describe('ObjtransService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjtransService]
    });
  });

  it('should be created', inject([ObjtransService], (service: ObjtransService) => {
    expect(service).toBeTruthy();
  }));
});
