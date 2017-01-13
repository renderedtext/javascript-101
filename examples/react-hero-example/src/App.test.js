import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import App from './App';

describe('<App />', () => {
  const wrapper = shallow(<App title="Test" />);

  it('should have h1 tag', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render title prop in h1 tag', () => {
    const h1 = wrapper.find('h1');
    expect(h1.text()).to.equal('Test');
  });

  it('should have HeroListContainer component', () => {
    expect(wrapper.find('HeroListContainer')).to.have.length(1);
  });

});
