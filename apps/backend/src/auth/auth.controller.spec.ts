/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';

describe('AuthController', () => {
  let controller: AuthController;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(() => 'test-token'),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('githubLogin should be defined', () => {
    expect(controller.githubLogin).toBeDefined();
  });

  it('githubCallback should redirect with token', async () => {
    const req = { user: { id: '1', email: 'test@example.com' } };
    const res = {
      redirect: jest.fn(),
    };

    await controller.githubCallback(req as any, res as any);

    expect(jwtService.sign).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith(expect.stringContaining('token=test-token'));
  });
});
