import React from 'react';
import faker from 'faker';
import { toInlineFragment } from 'fraql';
import mocker from '../../apollo/mocker';
import { Post } from './index';
import { PostFragments } from './fragments';
import { PostFields } from './__generated__/PostFields';

export default {
  title: 'Post',
};

export const post = (): React.ReactNode => {
  const inlineFragment = toInlineFragment(PostFragments.fields);
  const data = mocker.mockFragment<PostFields>(inlineFragment, {
    mocks: {
      Post: () => ({
        image: 'https://picsum.photos/720/720',
        caption: faker.lorem.sentences(2),
      }),
      User: () => ({
        avatar: faker.image.avatar(),
        username: faker.name.firstName(),
      }),
    },
  });
  return (
    <div style={{ width: 340, padding: 16 }}>
      <Post {...data} index={0} />
    </div>
  );
};
