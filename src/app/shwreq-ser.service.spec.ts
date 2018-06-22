import { TestBed, inject } from '@angular/core/testing';

import { ShwreqSerService } from './shwreq-ser.service';

describe('ShwreqSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShwreqSerService]
    });
  });

  it('should be created', inject([ShwreqSerService], (service: ShwreqSerService) => {
    expect(service).toBeTruthy();
  }));
});
