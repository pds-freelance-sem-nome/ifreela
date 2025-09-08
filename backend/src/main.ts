import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors();
  
  // Escutar em todas as interfaces para Docker
  await app.listen(process.env.PORT ?? 8080, '0.0.0.0');
  
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
