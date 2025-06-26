import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacion } from './entities/donacion.entity';
import { CreateDonacionDto } from './dto/create-donacion.dto';
import { UpdateDonacionDto } from './dto/update-donacion.dto';

@Injectable()
export class DonacionService {
  constructor(
    @InjectRepository(Donacion)
    private readonly donacionRepo: Repository<Donacion>,
  ) {}

  async create(dto: CreateDonacionDto): Promise<Donacion> {
    const nueva = this.donacionRepo.create(dto);
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

  async update(id: number, dto: UpdateDonacionDto): Promise<Donacion> {
    const donacion = await this.findOne(id);
    const actualizada = this.donacionRepo.merge(donacion, dto);
    return this.donacionRepo.save(actualizada);
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.donacionRepo.delete(id);
    if (resultado.affected === 0)
      throw new NotFoundException('Donación no encontrada');
  }
}
