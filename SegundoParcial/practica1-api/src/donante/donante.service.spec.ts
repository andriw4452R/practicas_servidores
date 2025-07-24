import { Test, TestingModule } from '@nestjs/testing';
import { DonanteService } from './donante.service';

describe('DonanteService', () => {
  let service: DonanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonanteService],
    }).compile();

    service = module.get<DonanteService>(DonanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
