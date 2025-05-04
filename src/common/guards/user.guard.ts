import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.header.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Unauthorized user');
    }

    const bearer = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];

    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException('Unauthorized user');
    }

    async function verify(token: string, jwtService: JwtService) {
      let payload: any;
      try {
        payload = await jwtService.verify(token, {
          secret: process.env.ACCESS_TOKEN_KEY,
        });
      } catch (error) {
        console.log(error);
        throw new BadRequestException(error);
      }

      if (!payload) {
        throw new UnauthorizedException('Unauthorized user');
      }

      
      if (!payload.is_active) {
        throw new ForbiddenException('Ruxsat etilmgan user');
      }

      req.user = payload
      return true

    }
    return verify(token, this.jwtService)
  }
}
