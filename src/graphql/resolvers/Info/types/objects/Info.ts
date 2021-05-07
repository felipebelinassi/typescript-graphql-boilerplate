import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export default class Info {
  @Field(() => Int)
  port!: number;

  @Field()
  healthy!: boolean;
}
