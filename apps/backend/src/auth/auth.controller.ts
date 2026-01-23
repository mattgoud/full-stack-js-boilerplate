import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { User } from '@repo/shared';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubLogin() {
    // Guards handle the redirect to GitHub
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubCallback(@Req() req: Request, @Res() res: Response) {
    const user = req.user as User;
    const payload = { sub: user.id, email: user.email };
    const token = await Promise.resolve(this.jwtService.sign(payload));

    // Redirect back to frontend with token
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        res.redirect(`${frontendUrl}/auth-callback?token=${token}`);
      }
    
        @Get('profile')
        @UseGuards(AuthGuard('jwt'))
        getProfile(@Req() req: Request) {
          return req.user as User;
        }
      }
      