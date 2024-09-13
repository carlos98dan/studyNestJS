import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  private clients = [];

  getAll() {
    return this.clients;
  }

  get(id: number) {
    return this.clients.filter((item) => item.id === id);
  }

  store(client: any) {
    this.clients.push({
      id: this.clients.length + 1,
      ...client,
    });
    return client;
  }

  update() {
    return 'Actualizando Cliente';
  }

  delete() {
    return 'Eliminando Cliente';
  }

  updateStatus() {
    return 'Actualizando Estado Cliente';
  }
}
