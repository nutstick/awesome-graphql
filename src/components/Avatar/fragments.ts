import gql from 'graphql-tag';

export const AvartarFragments = {
  fields: gql`
    fragment UserAvatarFields on User {
      avatar
      username
    }
  `,
};
