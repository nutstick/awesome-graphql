import React from 'react';
import faker from 'faker';
import { toInlineFragment } from 'fraql';
import mocker from '../../apollo/mocker';
import { Pagination } from './index';
import { PaginationFragments } from './fragments';
import { PaginationFields } from './__generated__/PaginationFields';

export default {
  title: 'Pagination',
};

export const pagination = (): React.ReactNode => {
  const inlineFragment = toInlineFragment(PaginationFragments.fields);
  const data = mocker.mockFragment<PaginationFields>(inlineFragment, {
    mocks: {
      PostConnection: () => ({
        edges: [],
        totalCount: faker.random.number({ min: 30, max: 60 }),
        __typename: 'PostConnection',
      }),
    },
  });
  console.log(data);
  return (
    <div style={{ padding: 16 }}>
      <Pagination {...data} offset={2} limit={10} />
    </div>
  );
};
