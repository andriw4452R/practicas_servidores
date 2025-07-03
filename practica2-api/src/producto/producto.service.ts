import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoInput } from './dto/create-producto.input';
import { UpdateProductoInput } from './dto/update-producto.input';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  create(input: CreateProductoInput): Promise<Producto> {
    const nuevo = this.productoRepository.create(input);
    return this.productoRepository.save(nuevo);
  }

  findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOneBy({ id });
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  async update(input: UpdateProductoInput): Promise<Producto> {
    const producto = await this.productoRepository.preload(input);
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${input.id} no encontrado`);
    }
    return this.productoRepository.save(producto);
  }

  async remove(id: number): Promise<boolean> {
    const producto = await this.findOne(id);
    await this.productoRepository.remove(producto);
    return true;
  }
}
