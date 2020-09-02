import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../users/users.service';

@Controller('auth')
export class AuthController {

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: {user: User}): Promise<User> {
    return req.user;
  }

}
