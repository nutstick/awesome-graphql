import React from 'react';
import faker from 'faker';
import mocker from '../../apollo/mocker';
import { Post } from './index';
import { PostFields } from './__generated__/PostFields';

export default {
  title: 'Post',
};

export const text = () => {
  const data = mocker.mockFragment<PostFields>(Post.fragments.fields, {
    mocks: {
      Post: () => ({
        image: faker.image.imageUrl(240, 240),
        caption: faker.lorem.sentences(2),
      }),
      User: () => ({
        avatar: faker.image.avatar(),
      }),
    },
  });
  return <Post {...data} index={0} />;
};
