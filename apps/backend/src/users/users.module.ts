import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
// No need to import PrismaModule here if PrismaModule is @Global!

@Module({

  controllers: [UsersController],

  providers: [UsersService],

  exports: [UsersService],

})

export class UsersModule {}
