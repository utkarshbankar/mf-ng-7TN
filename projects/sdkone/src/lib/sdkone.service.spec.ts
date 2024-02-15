import { TestBed } from '@angular/core/testing';

import { SdkoneService } from './sdkone.service';

describe('SdkoneService', () => {
  let service: SdkoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
