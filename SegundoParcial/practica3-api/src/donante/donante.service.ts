import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';
import { Donante } from './entities/donante.entity';

@Injectable()
export class DonanteService {
  constructor(
    @InjectRepository(Donante)
    private readonly donanteRepository: Repository<Donante>,
  ) {}

  create(createDonanteDto: CreateDonanteDto): Promise<Donante> {
    const nuevo = this.donanteRepository.create(createDonanteDto);
    return this.donanteRepository.save(nuevo);
  }

  findAll(): Promise<Donante[]> {
    return this.donanteRepository.find();
  }
  
  findOne(id: number): Promise<Donante> {
    return this.donanteRepository.findOne({
      where: { id_donante: id },
}) as Promise<Donante>;

  }

  async update(id: number, updateDonanteDto: UpdateDonanteDto): Promise<Donante> {
    await this.donanteRepository.update(id, updateDonanteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.donanteRepository.delete(id);
  }
}
