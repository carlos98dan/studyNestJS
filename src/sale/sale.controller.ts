import { Controller, Get } from '@nestjs/common';

@Controller('sale')
export class SaleController {
  @Get()
  index() {
    return 'Pagina Inicial Ventas';
  }
}
