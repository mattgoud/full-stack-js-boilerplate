import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Makes PrismaService available globally without having to re-import the module
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}