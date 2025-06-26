import { Test, TestingModule } from '@nestjs/testing';
import { DonanteController } from './donante.controller';
import { DonanteService } from './donante.service';

describe('DonanteController', () => {
  let controller: DonanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonanteController],
      providers: [DonanteService],
    }).compile();

    controller = module.get<DonanteController>(DonanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
