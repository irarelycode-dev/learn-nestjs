import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from '../config/configuration';
import { CustomProviderModule } from './custom-providers/custom-provider.module';
import { UserModule } from './user/user.module';
import { connection } from 'connection/connection';
import { NonClassbasedProviderTokensModule } from './non-class-based-provider-tokens/NonClassBasedproviderTokens.module';

@Module({
  imports: [
    UserModule,
    CustomProviderModule,
    NonClassbasedProviderTokensModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: 'CONNECTION', useValue: connection }],
})
export class AppModule {}
