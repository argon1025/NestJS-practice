import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const port = process.env.port || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`[INFO] Started server! -> http://localhost:${port}`)

  if (module.hot) {
    console.log("[INFO] HotLoad Activate")
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
