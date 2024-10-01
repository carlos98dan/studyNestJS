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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('client')
@ApiTags('Client')
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
  @ApiOperation({ summary: 'Get All Clients' })
  @ApiResponse({
    status: 200,
    description: 'Successful petition and return all clients',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  index(@Query('limit') limit: any) {
    return this.clientService.getAll();
  }

  @Get('/:id')
  find(@Param('id') id: string) {
    return this.clientService.get(id);
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
