import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacion } from './entities/donacion.entity';
import { CreateDonacionInput } from './dto/create-donacion.input';
import { UpdateDonacionInput } from './dto/update-donacion.input';

@Injectable()
export class DonacionService {
  constructor(
    @InjectRepository(Donacion)
    private readonly donacionRepo: Repository<Donacion>,
  ) {}

  async create(input: CreateDonacionInput): Promise<Donacion> {
    const nueva = this.donacionRepo.create(input);
    return this.donacionRepo.save(nueva);
  }

  async findAll(): Promise<Donacion[]> {
    return this.donacionRepo.find();
  }

  async findOne(id: number): Promise<Donacion> {
    const donacion = await this.donacionRepo.findOneBy({ id });
    if (!donacion) throw new NotFoundException('Donación no encontrada');
    return donacion;
  }

  async update(id: number, input: UpdateDonacionInput): Promise<Donacion> {
    const donacion = await this.findOne(id);
    const actualizada = this.donacionRepo.merge(donacion, input);
    return this.donacionRepo.save(actualizada);
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.donacionRepo.delete(id);
    if (resultado.affected === 0)
      throw new NotFoundException('Donación no encontrada');
  }
}
