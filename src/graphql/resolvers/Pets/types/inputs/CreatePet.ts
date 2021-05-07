import { Field, InputType, Int } from 'type-graphql';

@InputType({ description: 'Create new pet input' })
export default class CreatePetInput {
  @Field()
  name!: string;

  @Field()
  breed?: string;

  @Field()
  species!: string;

  @Field()
  birthDate!: string;
}
