import { EntityRepository, Repository } from 'typeorm';
import Pets from '.';
import CreatePetParams from '../../graphql/resolvers/Pets/types/inputs/CreatePet';

@EntityRepository(Pets)
export default class PetsRepository extends Repository<Pets> {
  async getPets() {
    return this.find();
  }

  async createPet(params: CreatePetParams) {
    return this.save(params);
  }
}
