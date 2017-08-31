import { TestBed, inject } from '@angular/core/testing';

import { InputServiceService } from './input-service.service';

describe('InputServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputServiceService]
    });
  });

  it('should be created', inject([InputServiceService], (service: InputServiceService) => {
    expect(service).toBeTruthy();
  }));
});
