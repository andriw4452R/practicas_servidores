import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DonacionService } from './donacion.service';
import { CreateDonacionDto } from './dto/create-donacion.dto';
import { UpdateDonacionDto } from './dto/update-donacion.dto';

@WebSocketGateway({ cors: true })
export class DonacionGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly donacionService: DonacionService) {}

  @SubscribeMessage('crearDonacion')
  async create(@MessageBody() data: CreateDonacionDto) {
    const nueva = await this.donacionService.create(data);
    this.server.emit('donacionCreada', nueva);
  }
  
  @SubscribeMessage('listarDonaciones')
  async findAll() {
    const donaciones = await this.donacionService.findAll();
    this.server.emit('donacionesListadas', donaciones);
  }

  @SubscribeMessage('actualizarDonacion')
  async update(@MessageBody() data: { id: number; dto: UpdateDonacionDto }) {
    await this.donacionService.update(data.id, data.dto);
    this.server.emit('donacionActualizada', await this.donacionService.findAll());
  }

  @SubscribeMessage('eliminarDonacion')
  async remove(@MessageBody() id: number) {
    await this.donacionService.remove(id);
    this.server.emit('donacionEliminada', await this.donacionService.findAll());
  }
}
