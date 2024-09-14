import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  private clients = [];

  getAll() {
    return this.clients;
  }

  get(id: number) {
    return this.clients.filter((item) => item.id === id);
  }

  store(client: CreateClientDto) {
    this.clients.push({
      id: this.clients.length + 1,
      ...client,
    });
    return client;
  }

  update(client: UpdateClientDto) {
    return 'Actualizando Cliente';
  }

  delete() {
    return 'Eliminando Cliente';
  }

  updateStatus() {
    return 'Actualizando Estado Cliente';
  }
}
