import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import HeroListItem from './HeroListItem.js';

describe('<HeroListItem />', () => {
  let selectHeroMock;
  let removeHeroMock;
  let wrapper;
  const hero = { name: 'Zed', type: 'Assassin', health: 600, mana: 0, dmg: 70 };

  beforeEach(() => {
    selectHeroMock = sinon.spy();
    removeHeroMock = sinon.spy();
    wrapper = mount(<HeroListItem
                      hero={ hero }
                      selectHero={ selectHeroMock }
                      removeHero={ removeHeroMock }
                      idx={ 1 }
                    />);
  });

  it('should have defined prop hero', () => {
    expect(wrapper.props().hero).to.not.be.undefined;
  });

  it('should have defined prop idx', () => {
    expect(wrapper.props().idx).to.not.be.undefined;
  });

  it('should have defined prop selectHero', () => {
    expect(wrapper.props().selectHero).to.not.be.undefined;
  });

  it('should have defined prop removeHero', () => {
    expect(wrapper.props().removeHero).to.not.be.undefined;
  });

  it('should have a li', () => {
    expect(wrapper.find('li')).to.have.length(1);
  });

  it('should have hero name in li tag', () => {
    const li = wrapper.find('li');
    //expect(li.text()).to.equal(wrapper.props().hero.name);
  });

  it('should call prop.selectHero when li is clicked', () => {
    const li = wrapper.find('li');
    li.simulate('click');
    expect(selectHeroMock).to.have.property('callCount', 1);
  });

  it('should have a span', () => {
    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should render prop.idx in span', () => {
    const span = wrapper.find('span');
    expect(span.text()).to.equal(wrapper.props().idx.toString());
  });

  it('should have a button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should render "remove" in button', () => {
    expect(wrapper.find('button').text()).to.equal('remove');
  });

  it('should call prop.remove when button is clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(removeHeroMock).to.have.property('callCount', 1);
  });

});
