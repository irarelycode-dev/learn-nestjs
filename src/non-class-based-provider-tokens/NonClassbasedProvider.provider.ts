import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NonClassBasedProvider {
  private readonly logger = new Logger(NonClassBasedProvider.name);
  constructor(@Inject('CONNECTION') connection: string) {
    this.logger.log(connection);
  }
}
