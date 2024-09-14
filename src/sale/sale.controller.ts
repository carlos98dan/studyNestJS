import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('sale')
export class SaleController {
  @Get()
  index() {
    return 'Pagina Inicial Ventas';
  }

  @Get('/ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }
}
