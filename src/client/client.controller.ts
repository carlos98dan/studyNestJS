import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get('/notFound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found';
  }

  @Get('/error')
  @HttpCode(500)
  errorPage() {
    return 'Error route';
  }

  @Get('/new')
  @HttpCode(201)
  somethingNew() {
    return 'Something new';
  }

  @Get()
  index(@Query('limit') limit: any) {
    console.log(limit);
    return this.clientService.getAll();
  }

  @Get('/:id')
  find(@Param('id') id: string) {
    return this.clientService.get(parseInt(id));
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true, // para que limpie los datos y quite los sub indices que no esten en el DTO
    }),
  )
  store(@Body() client: CreateClientDto) {
    return this.clientService.store(client);
  }

  @Put()
  update(@Body() client: UpdateClientDto) {
    return this.clientService.update(client);
  }

  @Delete()
  delete() {
    return this.clientService.delete();
  }

  @Patch()
  updateStatus() {
    return this.clientService.updateStatus();
  }
}
