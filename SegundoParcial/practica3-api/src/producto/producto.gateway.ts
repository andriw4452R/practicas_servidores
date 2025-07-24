import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@WebSocketGateway({ cors: true })
export class ProductoGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly productoService: ProductoService) {}

  @SubscribeMessage('crearProducto')
  async create(@MessageBody() data: CreateProductoDto) {
    await this.productoService.create(data);
    const productos = await this.productoService.findAll();
    this.server.emit('productoCreado', productos); // ✅ ahora lo reciben todos
  }

  @SubscribeMessage('listarProductos')
  async findAll() {
    const productos = await this.productoService.findAll();
    this.server.emit('productosListados', productos); // ✅ lo reciben todos
  }

  @SubscribeMessage('actualizarProducto')
  async update(@MessageBody() data: { id: number; dto: UpdateProductoDto }) {
    await this.productoService.update(data.id, data.dto);
    const productos = await this.productoService.findAll();
    this.server.emit('productoActualizado', productos); // ✅ todos actualizados
  }

  @SubscribeMessage('eliminarProducto')
  async remove(@MessageBody() id: number) {
    await this.productoService.remove(id);
    const productos = await this.productoService.findAll();
    this.server.emit('productoEliminado', productos); // ✅ todos notificados
  }
}
