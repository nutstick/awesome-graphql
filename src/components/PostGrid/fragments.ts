import gql from 'graphql-tag';
import { PostFragments } from '../Post/fragments';

export const PostGridFragments = {
  fields: gql`
    fragment PostGridFields on PostConnection {
      edges {
        node {
          id
          ...PostFields
        }
        cursor
      }
    }
    ${PostFragments.fields}
  `,
};
