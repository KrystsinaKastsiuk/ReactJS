import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../app/footer/footer';
import ErrorBoundary from '../errorBoundary/errorBoundary';

describe('ErrorBoundary', () => {
  const wrapper = shallow(<ErrorBoundary />);

  it('should does not has an error when start app', () => {
    expect(wrapper.contains(<h1>Something went wrong.</h1>)).toBe(false);
  });

  it('should does not has a class', () => {
    expect(wrapper.find('.footer')).toHaveLength(0);
  });

  it('should check existing error', () => {
    expect(wrapper.state().hasError).toEqual(false);
  });
});
