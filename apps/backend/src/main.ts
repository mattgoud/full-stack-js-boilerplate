import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow your frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Your Next.js frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3001);
  console.log(`🚀 Backend is running on: http://localhost:3001`);
}
void bootstrap();
