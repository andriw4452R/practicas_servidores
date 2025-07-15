import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionModule } from './donacion/donacion.module';
import { DonanteModule } from './donante/donante.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'donacion.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DonacionModule,
    DonanteModule,
    ProductoModule,
  ],
})
export class AppModule {}
