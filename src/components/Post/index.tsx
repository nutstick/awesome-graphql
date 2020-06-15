import React from 'react';
import { Card, Icon } from 'antd';
import { Avatar } from '../Avatar';
import { PostFields } from './__generated__/PostFields';
import s from './s.module.css';

export interface Props extends PostFields {
  index: number;
}

export const Post: React.FC<Props> = ({ caption, image, author }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <Avatar avatar={author.avatar} username={author.username} size="3rem" />
        <div className={s.title}>
          <span className={s.username}>{author.username}</span>
          <span className={s.info}>2 mins ago</span>
        </div>
      </div>
      <div className={s.imageContainer}>
        <img className={s.image} src={image} />
      </div>
      <Card.Meta className={s.caption} description={caption} />
      <div className={s.acctionContainer}>
        <div className={s.action}>
          <Icon style={{ marginRight: 6 }} type="message" />
          252
        </div>
        <div className={s.action}>
          <Icon style={{ marginRight: 3 }} type="heart" />
          11
        </div>
      </div>
    </div>
  );
};
