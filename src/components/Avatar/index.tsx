import React, { useState } from 'react';
import { UserAvatarFields } from './__generated__/UserAvatarFields';
import s from './s.module.css';

export interface Props extends Partial<UserAvatarFields> {
  size: number | string;
}

export const Avatar: React.FC<Props> = ({ avatar, username, size }) => {
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
