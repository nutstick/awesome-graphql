import gql from 'fraql';
import { PostGridFragments } from '../../components/PostGrid/fragments';
import { PaginationFragments } from '../../components/Pagination/fragments';

export const query = gql`
query PostQuery {
  posts {
    ...PostGridFields,
    ...PaginationFields
  }
  ${PostGridFragments.fields}
  ${PaginationFragments.fields}
}
`;
