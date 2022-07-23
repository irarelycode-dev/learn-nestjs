import { Module } from '@nestjs/common';
import { CustomProvidersController } from './custom-providers.controller';
import { CustomprovidersService } from './custom-providers.service';

@Module({
  controllers: [CustomProvidersController],
  providers: [
    { provide: CustomprovidersService, useClass: CustomprovidersService },
  ],
})
export class CustomProviderModule {}

//so far we have provided the list of providers with an array of class names
//the syntax providers"[CustomprovidersService] is a short form syntax of the following:
/**
 * @Module({
 * providers:[{provide:CustomprovidersService,useClass:CustomprovidersService}]
 * })
 **/
