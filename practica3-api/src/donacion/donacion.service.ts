import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacion } from './entities/donacion.entity';
import { CreateDonacionDto } from './dto/create-donacion.dto';
import { UpdateDonacionDto } from './dto/update-donacion.dto';
import { Donante } from 'src/donante/entities/donante.entity';

@Injectable()
export class DonacionService {
  constructor(
    @InjectRepository(Donacion)
    private readonly donacionRepo: Repository<Donacion>,

    @InjectRepository(Donante)
    private readonly donanteRepo: Repository<Donante>,
  ) {}

  async create(dto: CreateDonacionDto): Promise<Donacion> {
    const donante = await this.donanteRepo.findOneBy({ id_donante: dto.donante });

    if (!donante) {
      throw new Error('Donante no encontrado');
    }

    const nueva = this.donacionRepo.create({
      descripcion: dto.descripcion,
      cantidad: dto.cantidad,
      fecha: dto.fecha,
      donante,
    });

    return this.donacionRepo.save(nueva);
  }

  findAll(): Promise<Donacion[]> {
    return this.donacionRepo.find({
      relations: ['donante'],
    });
  }
  
  async findOne(id: number): Promise<Donacion> {
    const donacion = await this.donacionRepo.findOne({
      where: { id_donacion: id },
      relations: { donante: true },
    });
    
    if (!donacion) {
      throw new Error('Donación no encontrada');
    }
    
    return donacion;
  }

  async update(id: number, dto: UpdateDonacionDto): Promise<Donacion> {
    const donacion = await this.donacionRepo.findOneBy({ id_donacion: id });

    if (!donacion) {
      throw new Error('Donación no encontrada');
    }

    if (dto.donante) {
      const donante = await this.donanteRepo.findOneBy({ id_donante: dto.donante });
      if (!donante) throw new Error('Donante no encontrado');
      donacion.donante = donante;
    }

    Object.assign(donacion, dto);
    return this.donacionRepo.save(donacion);
  }

  async remove(id: number): Promise<void> {
    await this.donacionRepo.delete(id);
  }
}
