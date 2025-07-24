import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductoService } from './producto.service';
import { ProductoResolver } from './producto.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  providers: [ProductoService, ProductoResolver],
})
export class ProductoModule {}
