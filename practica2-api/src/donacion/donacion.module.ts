import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionService } from './donacion.service';
import { DonacionResolver } from './donacion.resolver';
import { Donacion } from './entities/donacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donacion])],
  providers: [DonacionService, DonacionResolver],
})
export class DonacionModule {}
