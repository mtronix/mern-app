import { Router } from 'express';

import { container } from '@/di';
import { GetProducts } from '@/delivery/web/controller/product/GetProducts';

export const routes = Router();

routes.get('/', container.get(GetProducts).execute);