import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import Search from './search';

describe('Search', () => {
  const wrapperShallow = shallow(<Search />);
  const wrapperRender = render(<h1 className="searchTitle">Find your movie</h1>);

  it('should render to searchButtons', () => {
    expect(wrapperShallow.contains(<input type="text" className="searchInput" placeholder="What do you need to find?" />)).toBe(true);
  });

  it('should render to static HTML for search field', () => {
    expect(wrapperRender.text()).toEqual('Find your movie');
  });
});

test('matches snapshot', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
