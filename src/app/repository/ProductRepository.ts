import { Product } from '@/domain/entity/Product';

export interface ProductRepository {
  fetchById(id: number): Product;
}