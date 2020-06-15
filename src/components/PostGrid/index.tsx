import React from 'react';
import { Post } from '../Post';
import s from './s.module.css';
import { PostGridFields } from './__generated__/PostGridFields';

export type Props = PostGridFields;

export const PostGrid: React.FC<Props> = ({ edges }: Props) => {
  return (
    <div className={s.root}>
      {(edges || []).map(({ node }, index) => {
        return <Post key={node.id} {...node} index={index} />;
      })}
    </div>
  );
};
