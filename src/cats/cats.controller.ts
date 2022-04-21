import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';

@Controller('cats')
export class CatsController {
//   @Get()
//   findAll(): string {
//     return 'This action returns all cats mijau';
//   }

  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: Cat) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}