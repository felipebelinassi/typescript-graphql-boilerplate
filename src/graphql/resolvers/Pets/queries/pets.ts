import { Resolver, Query } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Pets from '../types/objects/Pets';
import PetsRepository from '../../../../entities/Pets/PetsRepository';

@Resolver()
export default class GetPetsResolver {
  @InjectRepository(PetsRepository)
  private petsRepository!: PetsRepository;

  @Query(() => [Pets], { description: 'List of pets by user' })
  async pets(): Promise<Pets[]> {
    return this.petsRepository.getPets();
  }
}
