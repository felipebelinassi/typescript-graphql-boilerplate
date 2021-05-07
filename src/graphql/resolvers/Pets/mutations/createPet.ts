import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Pets from '../types/objects/Pets';
import PetsRepository from '../../../../entities/Pets/PetsRepository';
import CreatePetInput from '../types/inputs/CreatePet';

@Resolver()
export default class CreatePetResolver {
  @InjectRepository(PetsRepository)
  private petsRepository!: PetsRepository;

  @Mutation(() => Pets, { description: 'Create a new pet in the database' })
  async createPet(
    @Arg('input', () => CreatePetInput)
    input: CreatePetInput
  ): Promise<Pets> {
    return this.petsRepository.createPet(input);
  }
}
