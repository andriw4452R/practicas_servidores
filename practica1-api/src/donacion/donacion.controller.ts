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
import { DonacionService } from './donacion.service';
import { CreateDonacionDto } from './dto/create-donacion.dto';
import { UpdateDonacionDto } from './dto/update-donacion.dto';

@Controller('donaciones')
export class DonacionController {
  constructor(private readonly donacionService: DonacionService) {}

  @Post()
  create(@Body() dto: CreateDonacionDto) {
    return this.donacionService.create(dto);
  }

  @Get()
  findAll() {
    return this.donacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.donacionService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDonacionDto,
  ) {
    return this.donacionService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.donacionService.remove(id);
  }
}
