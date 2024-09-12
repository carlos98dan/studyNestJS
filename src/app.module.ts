import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ProductModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
