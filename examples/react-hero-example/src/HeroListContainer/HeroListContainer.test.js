import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import HeroListContainer from './HeroListContainer';

describe('<HeroListContainer />', () => {
  const wrapper = mount(<HeroListContainer />);

  it('should have heroes state defined', () => {
    expect(wrapper.state('heroes')).to.not.be.undefined;
  });

  it('should mount the component', () => {
  });

  it('should have addHero method defined', () => {
    expect(wrapper.instance().addHero).to.not.be.undefined;
  });

  it('should have removeHero method defined', () => {
    expect(wrapper.instance().removeHero).to.not.be.undefined;
  });

  it('should have componentDidMount defined', () => {
    expect(wrapper.instance().componentDidMount).to.not.be.undefined;
  });
});
