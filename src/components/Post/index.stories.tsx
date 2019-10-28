import React from 'react';
import faker from 'faker';
// @ts-ignore
import { toInlineFragment } from 'fraql';
import mocker from '../../apollo/mocker';
import { Post } from './index';
import { PostFields } from './__generated__/PostFields';

export default {
  title: 'Post',
};

export const text = () => {
  const inlineFragment = toInlineFragment(Post.fragments.fields);
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
  return <Post {...data} index={0} />;
};
