import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonanteService } from './donante.service';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Controller('donante')
export class DonanteController {
  constructor(private readonly donanteService: DonanteService) {}

  @Post()
  create(@Body() createDonanteDto: CreateDonanteDto) {
    return this.donanteService.create(createDonanteDto);
  }

  @Get()
  findAll() {
    return this.donanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonanteDto: UpdateDonanteDto) {
    return this.donanteService.update(+id, updateDonanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donanteService.remove(+id);
  }
}
