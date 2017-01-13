import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import HeroDetail from './HeroDetail';

describe('<HeroDetail />', () => {
  const hero = { name: 'Zed', type: 'Assaissin', health: 600, mana: 0, dmg: 70 };
  const wrapper = mount(<HeroDetail hero={ hero } />);

  it('should have hero prop defined', () => {
    expect(wrapper.props().hero).to.not.be.undefined;
  });

  it('should have one h1 tag', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render "Details" in h1', () => {
    expect(wrapper.find('h1').text()).to.equal('Details');
  });

  it('should have 5 p tags', () => {
    expect(wrapper.find('p')).to.have.length(5);
  });

  it('should render props.hero.name in p tag', () => {
    const p = wrapper.find('p[name="name"]');
    expect(p.text()).to.equal(`Name: ${wrapper.props().hero.name}`);
  });

  it('should render props.hero.type in p tag', () => {
    const p = wrapper.find('p[name="type"]');
    expect(p.text()).to.equal(`Type: ${wrapper.props().hero.type}`);
  });

  it('should render props.hero.health in p tag', () => {
    const p = wrapper.find('p[name="health"]');
    expect(p.text()).to.equal(`Health: ${wrapper.props().hero.health}`);
  });

  it('should render props.hero.mana in p tag', () => {
    const p = wrapper.find('p[name="mana"]');
    expect(p.text()).to.equal(`Mana: ${wrapper.props().hero.mana}`);
  });

  it('should render props.hero.dmg in p tag', () => {
    const p = wrapper.find('p[name="damage"]');
    expect(p.text()).to.equal(`Damage: ${wrapper.props().hero.dmg}`);
  });
});
