import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Request } from 'express';

@Injectable()
export class LogReqresInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Request LOG.");
    const req = context.switchToHttp().getRequest<Request>();
    console.log('url:', req.url);
    console.log('headers:', req.headers)
    
    
    return next.handle().pipe(tap(data => console.log('Response LOG.\n', data)));
  }
}
