import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { DonanteService } from './donante.service';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Controller('donantes')
export class DonanteController {
  constructor(private readonly donanteService: DonanteService) {}

  @Post()
  create(@Body() dto: CreateDonanteDto) {
    return this.donanteService.create(dto);
  }

  @Get()
  findAll() {
    return this.donanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.donanteService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDonanteDto,
  ) {
    return this.donanteService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.donanteService.remove(id);
  }
}
