import { Test, TestingModule } from '@nestjs/testing';
import { CoffesGateway } from './coffes.gateway';

describe('CoffesGateway', () => {
  let gateway: CoffesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffesGateway],
    }).compile();

    gateway = module.get<CoffesGateway>(CoffesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
