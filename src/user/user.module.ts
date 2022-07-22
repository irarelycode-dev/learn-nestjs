import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  exports: [UserService],
  imports: [ConfigModule],
  controllers: [CatsController],
})
export class UserModule {}
