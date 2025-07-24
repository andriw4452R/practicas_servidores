import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionService } from './donacion.service';
import { DonacionController } from './donacion.controller';
import { Donacion } from './entities/donacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donacion])],
  controllers: [DonacionController],
  providers: [DonacionService],
})
export class DonacionModule {}
