import { TestBed, inject } from '@angular/core/testing';

import { DynamicPlatformService } from './dynamic-platform.service';

describe('DynamicPlatformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicPlatformService]
    });
  });

  it('should ...', inject([DynamicPlatformService], (service: DynamicPlatformService) => {
    expect(service).toBeTruthy();
  }));
});
