import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  index() {
    return this.clientService.getAll();
  }

  @Get()
  find() {
    return this.clientService.get();
  }

  @Post()
  store() {
    return this.clientService.store();
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
