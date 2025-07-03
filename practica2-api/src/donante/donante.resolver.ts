import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DonanteService } from './donante.service';
import { Donante } from './entities/donante.entity';
import { CreateDonanteInput } from './dto/create-donante.input';
import { UpdateDonanteInput } from './dto/update-donante.input';

@Resolver(() => Donante)
export class DonanteResolver {
  constructor(private readonly donanteService: DonanteService) {}

  @Mutation(() => Donante)
  createDonante(@Args('createDonanteInput') input: CreateDonanteInput) {
    return this.donanteService.create(input);
  }

  @Query(() => [Donante], { name: 'donantes' })
  findAll() {
    return this.donanteService.findAll();
  }

  @Query(() => Donante, { name: 'donante' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.donanteService.findOne(id);
  }

  @Mutation(() => Donante)
  updateDonante(@Args('updateDonanteInput') input: UpdateDonanteInput) {
    return this.donanteService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  removeDonante(@Args('id', { type: () => Int }) id: number) {
    this.donanteService.remove(id);
    return true;
}

}