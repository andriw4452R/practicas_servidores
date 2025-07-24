import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donacion } from './entities/donacion.entity';
import { Donante } from 'src/donante/entities/donante.entity';
import { DonacionService } from './donacion.service';
import { DonacionGateway } from './donacion.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Donacion, Donante])],
  providers: [DonacionService, DonacionGateway],
})
export class DonacionModule {}
