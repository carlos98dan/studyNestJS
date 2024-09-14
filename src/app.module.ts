import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ProductModule, ClientModule, SaleModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
