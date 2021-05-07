import { gql } from 'graphql-tag';

export const getPetsQuery = gql`
  query getPets {
    pets {
      id
      name
      breed
      species
      birthDate
    }
  }
`;
