import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';

    // Get the stack trace
    const stack = exception instanceof Error ? exception.stack : undefined;

    // Build the error response
    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message: message,
      ...(stack && { stack: stack }), // Include stack trace
      // If it's an HttpException, include the full response
      ...(exception instanceof HttpException && {
        error: exception.getResponse(),
      }),
    };

    // Log the error for debugging
    console.error('Exception caught:', {
      ...errorResponse,
      body: request.body,
      params: request.params,
      query: request.query,
    });

    response.status(status).json(errorResponse);
  }
}
