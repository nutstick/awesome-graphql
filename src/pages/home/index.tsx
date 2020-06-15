import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { useParams } from 'react-router';
import Layout from '../../components/Layout';
import { Pagination } from '../../components/Pagination';
import { PostGrid } from '../../components/PostGrid';
import { query } from './query';
import { PostQuery } from './__generated__/PostQuery';

function usePageParams(defaultPage = 0, defaultPageSize = 10) {
  const { pageString, pageSizeString } = useParams();
  return {
    page: pageString ? parseInt(pageString, 10) : defaultPage,
    pageSize: pageString ? parseInt(pageSizeString, 10) : defaultPageSize,
  };
}

const Index: React.FC = () => {
  const { page, pageSize } = usePageParams();
  const { data } = useQuery<PostQuery>(query);
  return (
    <Layout>
      {data && data.posts ? <PostGrid {...data.posts} /> : null}
      {data && data.posts ? (
        <Pagination page={page} pageSize={pageSize} {...data.posts} />
      ) : null}
    </Layout>
  );
};

export default Index;
