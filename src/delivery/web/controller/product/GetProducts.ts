import { Request, Response } from 'express';
import { injectable } from 'inversify';

import { Controller } from '@/delivery/web/controller/Controller';

@injectable()
export class GetProducts implements Controller {
  execute(req: Request, res: Response) {
    console.log('req: ', req);
    res.json({
      foo: 'bar',
      date: new Date(),
    });
  }
}