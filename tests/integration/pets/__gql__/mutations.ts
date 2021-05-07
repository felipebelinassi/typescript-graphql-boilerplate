import gql from 'graphql-tag';

export const createPetMutation = gql`
  mutation create(
    $name: String!
    $breed: String
    $species: String!
    $birthDate: String!
  ) {
    createPet(
      input: {
        name: $name
        breed: $breed
        species: $species
        birthDate: $birthDate
      }
    ) {
      id
      name
      breed
      species
      birthDate
    }
  }
`;
