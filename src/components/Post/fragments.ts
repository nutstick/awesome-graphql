import gql from 'graphql-tag';
import { AvartarFragments } from '../Avatar/fragments';

export const PostFragments = {
  fields: gql`
    fragment PostFields on Post {
      author {
        id
        ...UserAvatarFields
      }
      image
      caption
      comments {
        totalCount
      }
      likes {
        totalCount
      }
    }
    ${AvartarFragments.fields}
  `,
};
