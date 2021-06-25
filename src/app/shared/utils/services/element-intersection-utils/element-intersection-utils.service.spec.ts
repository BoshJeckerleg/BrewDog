import { TestBed } from '@angular/core/testing';
import { ElementIntersectionUtilsService } from './element-intersection-utils.service';

describe('ElementIntersectionUtilsService', () => {
  let service: ElementIntersectionUtilsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    service = TestBed.inject(ElementIntersectionUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
