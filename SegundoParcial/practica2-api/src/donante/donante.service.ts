import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donante } from './entities/donante.entity';
import { CreateDonanteInput } from './dto/create-donante.input';
import { UpdateDonanteInput } from './dto/update-donante.input';

@Injectable()
export class DonanteService {
  constructor(
    @InjectRepository(Donante)
    private readonly donanteRepo: Repository<Donante>,
  ) {}

  async create(input: CreateDonanteInput): Promise<Donante> {
    const nuevo = this.donanteRepo.create(input);
    return this.donanteRepo.save(nuevo);
  }

  async findAll(): Promise<Donante[]> {
    return this.donanteRepo.find();
  }

  async findOne(id: number): Promise<Donante> {
    const donante = await this.donanteRepo.findOneBy({ id });
    if (!donante) throw new NotFoundException('Donante no encontrado');
    return donante;
  }

  async update(id: number, input: UpdateDonanteInput): Promise<Donante> {
    const donante = await this.findOne(id);
    const actualizado = this.donanteRepo.merge(donante, input);
    return this.donanteRepo.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    const result = await this.donanteRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Donante no encontrado');
    }
  }
}
