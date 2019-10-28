import React, { useState } from 'react';
import gql from 'graphql-tag';
import { UserAvatarFields } from './__generated__/UserAvatarFields';
import s from './style.module.css';

const fragments = {
  fields: gql`
    fragment UserAvatarFields on User {
      avatar
      username
    }
  `,
};

export interface Props extends Partial<UserAvatarFields> {
  size: number | string;
}

export const Avatar = ({ avatar, username, size }: Props) => {
  const [error, setError] = useState(false);
  const onError = () => {
    setError(true);
  };
  let children = null;
  if (avatar && !error) {
    children = (
      <img className={s.img} src={avatar} onError={onError} alt={username} />
    );
  } else {
    children = <div>error</div>;
  }
  return (
    <div className={s.root} style={{ width: size, height: size }}>
      {children}
    </div>
  );
};

Avatar.fragments = fragments;
