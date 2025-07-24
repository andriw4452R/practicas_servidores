import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donante } from './entities/donante.entity';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Injectable()
export class DonanteService {
  constructor(
    @InjectRepository(Donante)
    private readonly donanteRepository: Repository<Donante>,
  ) {}

  async create(dto: CreateDonanteDto): Promise<Donante> {
    const nuevo = this.donanteRepository.create(dto);
    return await this.donanteRepository.save(nuevo);
  }

  async findAll(): Promise<Donante[]> {
    return await this.donanteRepository.find();
  }

  async findOne(id: number): Promise<Donante> {
    const donante = await this.donanteRepository.findOneBy({ id });
    if (!donante) throw new NotFoundException('Donante no encontrado');
    return donante;
  }

  async update(id: number, dto: UpdateDonanteDto): Promise<Donante> {
    const donante = await this.findOne(id);
    const actualizado = Object.assign(donante, dto);
    return await this.donanteRepository.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.donanteRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException('Donante no encontrado');
    }
  }
}
