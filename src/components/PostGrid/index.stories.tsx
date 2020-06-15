import React from 'react';
import faker from 'faker';
import { toInlineFragment } from 'fraql';
import mocker from '../../apollo/mocker';
import { PostGrid } from './index';
import { PostGridFragments } from './fragments';
import { PostGridFields } from './__generated__/PostGridFields';

export default {
  title: 'Post',
};

export const grid = (): React.ReactNode => {
  const inlineFragment = toInlineFragment(PostGridFragments.fields);
  const data = mocker.mockFragment<PostGridFields>(inlineFragment, {
    mocks: {
      PostConnection: () => ({
        edges: () => new Array(20).fill({}),
      }),
      Post: () => ({
        image: faker.random.image(),
        caption: faker.lorem.sentences(2),
      }),
      User: () => ({
        avatar: faker.image.avatar(),
        username: faker.name.firstName(),
      }),
    },
  });
  return (
    <div style={{ padding: 16 }}>
      <PostGrid {...data} index={0} />
    </div>
  );
};
