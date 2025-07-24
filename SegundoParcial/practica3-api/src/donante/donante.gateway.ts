import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DonanteService } from './donante.service';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@WebSocketGateway({ cors: true })
export class DonanteGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly donanteService: DonanteService) {}

  @SubscribeMessage('crearDonante')
  async create(@MessageBody() data: CreateDonanteDto) {
    const nuevoDonante = await this.donanteService.create(data);
    this.server.emit('donanteCreado', nuevoDonante); // 👈 Solo se emite el nuevo donante
  }
  
  @SubscribeMessage('listarDonantes')
  async findAll() {
    const donantes = await this.donanteService.findAll();
    this.server.emit('donantesListados', donantes);
  }

  @SubscribeMessage('actualizarDonante')
  async update(@MessageBody() data: { id: number; dto: UpdateDonanteDto }) {
    await this.donanteService.update(data.id, data.dto);
    this.server.emit('donanteActualizado', await this.donanteService.findAll());
  }

  @SubscribeMessage('eliminarDonante')
  async remove(@MessageBody() id: number) {
    await this.donanteService.remove(id);
    this.server.emit('donanteEliminado', await this.donanteService.findAll());
  }
}
