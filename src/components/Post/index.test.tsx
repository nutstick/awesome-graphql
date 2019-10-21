import React from 'react';
import renderer from 'react-test-renderer';
import mocker from '../../apollo/mocker';
import { Post } from './index';
import { PostFields } from './__generated__/PostFields';

describe('Post', () => {
  it('render', () => {
    const data = mocker.mockFragment<PostFields>(Post.fragments.fields);

    const component = renderer.create(<Post {...data} index={0} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
