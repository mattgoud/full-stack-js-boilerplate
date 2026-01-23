/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { GithubStrategy } from './github.strategy';
import { AuthService } from '../auth.service';

describe('GithubStrategy', () => {
  let strategy: GithubStrategy;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubStrategy,
        {
          provide: AuthService,
          useValue: {
            validateGithubUser: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'GITHUB_CLIENT_ID') return 'test-id';
              if (key === 'GITHUB_CLIENT_SECRET') return 'test-secret';
              if (key === 'GITHUB_CALLBACK_URL') return 'test-url';
              return null;
            }),
            getOrThrow: jest.fn((key: string) => {
              if (key === 'GITHUB_CLIENT_ID') return 'test-id';
              if (key === 'GITHUB_CLIENT_SECRET') return 'test-secret';
              if (key === 'GITHUB_CALLBACK_URL') return 'test-url';
              throw new Error('Missing config');
            }),
          },
        },
      ],
    }).compile();

    strategy = module.get<GithubStrategy>(GithubStrategy);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  it('should validate user using authService', async () => {
    const profile = {
      id: '123',
      username: 'testuser',
      emails: [{ value: 'test@example.com' }],
      photos: [{ value: 'avatar-url' }],
      displayName: 'Test User',
    };
    const done = jest.fn();

    await strategy.validate('access-token', 'refresh-token', profile as any, (err, user) => {
        done(err, user);
    });

    expect(authService.validateGithubUser).toHaveBeenCalledWith({
      githubId: '123',
      email: 'test@example.com',
      username: 'testuser',
      name: 'Test User',
      avatarUrl: 'avatar-url',
    });
    expect(done).toHaveBeenCalled();
  });

  it('should validate user even with missing fields', async () => {
    const profile = {
      id: '123',
    };
    const done = jest.fn();

    await strategy.validate('access-token', 'refresh-token', profile as any, (err, user) => {
        done(err, user);
    });

    expect(authService.validateGithubUser).toHaveBeenCalledWith({
      githubId: '123',
      email: '',
      username: '',
      name: '',
      avatarUrl: '',
    });
    expect(done).toHaveBeenCalled();
  });
});
