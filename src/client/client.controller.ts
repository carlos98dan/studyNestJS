import { Controller, Get } from '@nestjs/common';

@Controller('client')
export class ClientController {
  @Get()
  index() {
    return 'Pagina Inicial Clientes';
  }
}
