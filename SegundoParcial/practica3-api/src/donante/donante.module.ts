import { Module } from '@nestjs/common';
import { DonanteService } from './donante.service';
import { DonanteController } from './donante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donante } from './entities/donante.entity';
import { DonanteGateway } from './donante.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Donante])],
  controllers: [DonanteController],
  providers: [DonanteService, DonanteGateway],
})
export class DonanteModule {}
