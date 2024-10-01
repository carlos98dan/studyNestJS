import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  index() {
    return this.productService.getProducts();
  }
}
