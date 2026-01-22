import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
// Plus besoin d'importer PrismaModule ici si PrismaModule est @Global !

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}