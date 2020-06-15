import gql from 'graphql-tag';

export const PaginationFragments = {
  fields: gql`
    fragment PaginationFields on Connection {
      totalCount
    }
  `,
};
