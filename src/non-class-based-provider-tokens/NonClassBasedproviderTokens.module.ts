import { Module } from '@nestjs/common';
import { NonClassBasedProvider } from './NonClassbasedProvider.provider';

@Module({ providers: [NonClassBasedProvider] })
export class NonClassbasedProviderTokensModule {}
