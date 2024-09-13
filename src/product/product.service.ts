import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Licuadora',
    },
    {
      id: 2,
      name: 'Batidora',
    },
    {
      id: 3,
      name: 'Cuchara',
    },
  ];

  getProducts() {
    return this.products;
  }
}
