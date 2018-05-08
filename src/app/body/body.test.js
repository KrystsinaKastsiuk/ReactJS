import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Body from './body';

describe('Body', () => {
  const wrapper = shallow(<Body />);

  it('should has a class related to body', () => {
    expect(wrapper.find('.movies')).toHaveLength(1);
  });
});

test('matches snapshot', () => {
  const tree = renderer.create(<Body />).toJSON();
  expect(tree).toMatchSnapshot();
});
