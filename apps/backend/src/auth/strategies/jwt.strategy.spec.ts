/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from '../../users/users.service';
import { UnauthorizedException } from '@nestjs/common';

describe('JwtStrategy', () => {
  let strategy: JwtStrategy;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtStrategy,
        {
          provide: UsersService,
          useValue: {
            findById: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'JWT_SECRET') return 'test-secret';
              return null;
            }),
          },
        },
      ],
    }).compile();

    strategy = module.get<JwtStrategy>(JwtStrategy);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  it('should validate and return user if found', async () => {
    const user = { id: '123', email: 'test@example.com' };
    (usersService.findById as jest.Mock).mockResolvedValue(user);

    const result = await strategy.validate({ sub: '123', email: 'test@example.com' });
    expect(result).toEqual(user);
    expect(usersService.findById).toHaveBeenCalledWith('123');
  });

  it('should throw UnauthorizedException if user not found', async () => {
    (usersService.findById as jest.Mock).mockResolvedValue(null);

    await expect(strategy.validate({ sub: '123', email: 'test@example.com' })).rejects.toThrow(UnauthorizedException);
  });
});
