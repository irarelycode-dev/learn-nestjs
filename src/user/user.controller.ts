import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Logger } from '@nestjs/common';
import { CreateCatDto } from 'dto';
import { UpdateCatDto } from 'dto/user/update-cat.dto';
import { ConfigService } from '@nestjs/config';

@Controller('cats')
export class CatsController {
  private readonly logger = new Logger(CatsController.name);

  constructor(private configService: ConfigService) {}

  @Get()
  findAll(): string {
    const db_username = this.configService.get<string>('DATABASE_USER');
    const db_password = this.configService.get<string>('DATABASE_PASSWORD');
    this.logger.log(db_username + ' ' + db_password);
    return 'get controller for cats';
  }
  @Get('list-cats')
  listCats(@Req() req: Request): string {
    this.logger.log(req.originalUrl);
    return 'list all cats';
  }
  @Get(':id')
  getCat(@Param('id') id: string): string {
    this.logger.log(id);
    return `cat with ${id} returned`;
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    this.logger.log(createCatDto);
    return 'cat has been created';
  }
  @Put(':id')
  async updateCat(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<string> {
    this.logger.log(updateCatDto);
    return 'cat has been updated';
  }
  @Delete(':id')
  async deleteCat(@Param('id') id: string): Promise<string> {
    this.logger.log(id);
    return `cat with ${id} has been deleted`;
  }
}
