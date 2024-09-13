import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  private clients = [
    {
      id: 1,
      name: 'Carolina',
    },
    {
      id: 2,
      name: 'Daniela',
    },
    {
      id: 3,
      name: 'Andres',
    },
  ];

  getAll() {
    return this.clients;
  }

  get() {
    return this.clients;
  }

  store() {
    return 'Creando Cliente';
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
