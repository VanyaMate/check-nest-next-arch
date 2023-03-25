import {ArgumentsHost, ExceptionFilter} from "@nestjs/common";

export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.send('404');
    }
}