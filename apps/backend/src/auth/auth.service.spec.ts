/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return existing user if found by githubId', async () => {
    const existingUser = { id: '1', githubId: '123', email: 'test@example.com' };
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(existingUser);

    const result = await service.validateGithubUser({
      githubId: '123',
      email: 'test@example.com',
      username: 'testuser',
      name: 'Test User',
      avatarUrl: 'avatar-url',
    });

    expect(result).toEqual(existingUser);
    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { githubId: '123' } });
  });

  it('should create and return new user if not found', async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
    const newUser = { id: '2', githubId: '456', email: 'new@example.com' };
    (prisma.user.create as jest.Mock).mockResolvedValue(newUser);

    const result = await service.validateGithubUser({
      githubId: '456',
      email: 'new@example.com',
      username: 'newuser',
      name: 'New User',
      avatarUrl: 'new-avatar',
    });

    expect(result).toEqual(newUser);
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        githubId: '456',
        email: 'new@example.com',
        username: 'newuser',
        name: 'New User',
        avatarUrl: 'new-avatar',
      },
    });
  });
});
