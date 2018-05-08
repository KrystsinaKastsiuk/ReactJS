import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './header';
import Logo from './logo/logo';
import Search from './searchField/search';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('should render to static HTML for logo', () => {
    expect(wrapper.find(Logo).exists()).toBe(true);
  });

  it('should has a search', () => {
    expect(wrapper.contains(<Search />)).toBe(true);
  });
});

test('matches snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
