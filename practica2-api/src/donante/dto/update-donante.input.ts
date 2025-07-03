import { CreateDonanteInput } from './create-donante.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDonanteInput extends PartialType(CreateDonanteInput) {
  @Field(() => Int)
  id: number;
}
