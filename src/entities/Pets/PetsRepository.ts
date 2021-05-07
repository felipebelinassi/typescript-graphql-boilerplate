import { EntityRepository, Repository } from 'typeorm';
import Pets from './Pets';

type CreatePetParams = Omit<Pets, 'id'>;

@EntityRepository(Pets)
export default class PetsRepository extends Repository<Pets> {
  async getPets() {
    return this.find();
  }

  async createPet(params: CreatePetParams) {
    return this.save(params);
  }
}
