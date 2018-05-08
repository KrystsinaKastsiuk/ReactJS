import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';
import LegalFooter from './legalFooter';

describe('Footer', () => {
  const wrapper = shallow(<Footer />);

  it('should has a leaglFooter', () => {
    expect(wrapper.find(LegalFooter).exists()).toBe(true);
  });
});
