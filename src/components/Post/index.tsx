import React from 'react';
import { Card, Avatar } from 'antd';
import gql from 'fraql';
import { PostFields } from './__generated__/PostFields';

const fragments = {
  fields: gql`
    fragment PostFields on Post {
      author {
        avatar
        username
      }
      image
      caption
      comments {
        id
        author {
          avatar
        }
        content
      }
    }
  `,
};

export interface Props extends PostFields {
  index: number;
}

export const Post = ({ caption, image, author }: Props) => {
  return (
    <Card
      hoverable
      style={{ width: 240, height: 240 }}
      cover={<img alt="example" src={image} />}
    >
      <div>
        <Avatar src={author.avatar} />
        <span>{author.username}</span>
      </div>
      <Card.Meta description={caption} />
    </Card>
  );
};

Post.fragments = fragments;
