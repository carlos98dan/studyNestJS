import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.client.findMany();
  }

  get(id: string) {
    // return this.clients.filter((item) => item.id === id);
    return this.prisma.client.findUnique({
      where: { id },
    });
  }

  store(client: CreateClientDto) {
    return this.prisma.client.create({ data: client });
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
