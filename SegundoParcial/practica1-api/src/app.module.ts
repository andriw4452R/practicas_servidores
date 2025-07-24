import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonanteModule } from './donante/donante.module';
import { DonacionModule } from './donacion/donacion.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // solo para desarrollo
    }),
    DonanteModule,
    DonacionModule,
    ProductoModule,
  ],
})
export class AppModule {}
