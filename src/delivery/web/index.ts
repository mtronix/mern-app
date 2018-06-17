import * as express from 'express';

import { routes } from '@/delivery/web/routes';

export function initialize() {
  const PORT = process.env.PORT || 3000;
  const app = express();

  app.use(routes);

  app.listen(PORT, () => console.log(`Listening ${PORT}`));
}