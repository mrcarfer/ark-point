import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('users')
export class UsersController {

  @UseGuards(JwtGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}