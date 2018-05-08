import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './header';
import Logo from './logo/logo';
import Search from './searchField/search';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('has a logo', () => {
    expect(wrapper.find(Logo).exists()).toBe(true);
  });

  it('has a search', () => {
    expect(wrapper.find(Search).exists()).toBe(true);
  });
});


test('matches snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
