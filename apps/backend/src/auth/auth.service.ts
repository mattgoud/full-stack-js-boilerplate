import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateGithubUser(details: {
    githubId: string;
    email: string;
    username: string;
    name: string;
    avatarUrl: string;
  }) {
    // Skeleton implementation
    return Promise.resolve(details);
  }
}