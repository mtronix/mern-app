import { Container } from 'inversify';

export const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

// container.bind<GetPostsBoundary>(TYPES.GetPostsBoundary).to(CONFIG.GetPostsBoundary);