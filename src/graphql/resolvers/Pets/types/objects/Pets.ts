import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export default class Pets {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field({ nullable: true })
  breed?: string;

  @Field({ nullable: true })
  species!: string;

  @Field()
  birthDate!: string;

  @Field()
  createdAt!: Date;
}
