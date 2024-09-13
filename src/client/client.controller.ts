import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

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
  store(@Body() client: any) {
    return this.clientService.store(client);
  }

  @Put()
  update() {
    return this.clientService.update();
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
