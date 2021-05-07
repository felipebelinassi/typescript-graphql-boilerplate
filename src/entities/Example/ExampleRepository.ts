import { EntityRepository, Repository } from 'typeorm';
import Example from '.';

@EntityRepository(Example)
export default class ExampleRepository extends Repository<Example> {
  async get() {
    return this.find();
  }
}
