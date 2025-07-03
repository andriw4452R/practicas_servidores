import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DonacionService } from './donacion.service';
import { Donacion } from './entities/donacion.entity';
import { CreateDonacionInput } from './dto/create-donacion.input';
import { UpdateDonacionInput } from './dto/update-donacion.input';

@Resolver(() => Donacion)
export class DonacionResolver {
  constructor(private readonly donacionService: DonacionService) {}

  @Mutation(() => Donacion)
  createDonacion(@Args('createDonacionInput') createDonacionInput: CreateDonacionInput) {
    return this.donacionService.create(createDonacionInput);
  }

  @Query(() => [Donacion], { name: 'donaciones' })
  findAll() {
    return this.donacionService.findAll();
  }

  @Query(() => Donacion, { name: 'donacion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.donacionService.findOne(id);
  }

  @Mutation(() => Donacion)
  updateDonacion(@Args('updateDonacionInput') updateDonacionInput: UpdateDonacionInput) {
    return this.donacionService.update(updateDonacionInput.id, updateDonacionInput);
  }

  @Mutation(() => Donacion)
  removeDonacion(@Args('id', { type: () => Int }) id: number) {
    return this.donacionService.remove(id);
  }
}
