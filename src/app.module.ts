import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [ProductModule, ClientModule, SaleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
