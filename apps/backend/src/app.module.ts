import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule, // Should be imported only once here
    UsersModule
  ],
})
export class AppModule {}