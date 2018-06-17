import { UseCase } from '@/app/useCase/UseCase';

import { ProductRepository } from '@/app/repository/ProductRepository';

export interface Request {
  productId: number;
}

export interface Response {
  id: number;
  name: string;
  price: number;
}

export class GetProductsList implements UseCase<Request, Response> {
  private productRepository: ProductRepository;

  execute(request: Request): Response {
    const product = this.productRepository.fetchById(request.productId);

    return {
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
    };
  }
}