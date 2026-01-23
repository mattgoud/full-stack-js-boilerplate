import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateGithubUser(details: {
    githubId: string;
    email: string;
    username: string;
    name: string;
    avatarUrl: string;
  }) {
    const user = await this.prisma.user.findUnique({
      where: { githubId: details.githubId },
    });

    if (user) {
      return user;
    }

    return this.prisma.user.create({
      data: {
        githubId: details.githubId,
        email: details.email,
        username: details.username,
        name: details.name,
        avatarUrl: details.avatarUrl,
      },
    });
  }
}
