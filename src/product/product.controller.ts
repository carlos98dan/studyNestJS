import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  index() {
    return 'Pagina Inicial Productos';
  }

  @Get('/all')
  getAllProducts() {
    // Buscar en db
    // Peticion a otro backend o api

    return 'Obteniendo todos los productos';
  }
}
