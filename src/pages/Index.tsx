import React from 'react';
import Layout from '../components/Layout';
import { useQuery } from '@apollo/react-hooks';
import gql from 'fraql';
import { Post } from '../components/Post';
import { PostQuery } from './__generated__/PostQuery';

const query = gql`
  query PostQuery {
    posts {
      edges {
        node {
          id
          ...PostFields
        }
      }
    }
    ${Post.fragments.fields}
  }
`;

const Index: React.FC = () => {
  const { data } = useQuery<PostQuery>(query);
  return (
    <Layout>
      {data && data.posts && data.posts.edges
        ? data.posts.edges.map(({ node: { id, ...node } }, index) => (
            <Post key={id} index={index} {...node} />
          ))
        : null}
    </Layout>
  );
};

export default Index;
