import { CreateDonacionInput } from './create-donacion.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDonacionInput extends PartialType(CreateDonacionInput) {
  @Field(() => Int)
  id: number;
}
