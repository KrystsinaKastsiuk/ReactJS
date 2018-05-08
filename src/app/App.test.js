import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
import ErrorBoundary from '../errorBoundary/errorBoundary';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render to Header', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should render to Body', () => {
    expect(wrapper.find(Body).exists()).toBe(true);
  });

  it('should render to Footer', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('should has a search', () => {
    expect(wrapper.contains(<ErrorBoundary><Body /></ErrorBoundary>)).toBe(true);
  });

  it('should has a class related to footer', () => {
    expect(wrapper.find(Footer).dive().find('.footer')).toHaveLength(1);
  });
});
