import {
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

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

  @Get('/active/:status')
  isProductActive(@Param('status', ParseBoolPipe) status: boolean) {
    return status;
  }

  @Get('/greet')
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    return `Hello ${query.name}, you are ${query.age + 30} years old`;
  }
}
