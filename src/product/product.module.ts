import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('product');
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '/product',
      method: RequestMethod.GET,
    });
  }
}
