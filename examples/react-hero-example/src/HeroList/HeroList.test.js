import React from 'react';
import { shallow,  mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import HeroList from './HeroList';

describe('<HeroList />', () => {
  const heroesMock = [
    { name: 'Zed', type: 'Assaissin', health: 600, mana: 0, dmg: 70 },
    { name: 'Shen', type: 'Tank', health: 700, mana: 0, dmg: 60 }
  ];
  const wrapper = mount(<HeroList heroes={ heroesMock } />);
  const shallowWrapper = shallow(<HeroList heroes={ heroesMock } />);

  it('should have hero state defined', () => {
    expect(wrapper.state('hero')).to.not.be.undefined;
  });

  it('should have heroes prop defined', () => {
    expect(wrapper.props().heroes).to.not.be.undefined;
  });

  it('should have one h1 tag', () => {
    expect(shallowWrapper.find('h1')).to.have.length(1);
  });

  it('should render "Heroes" in h1 tag', () => {
    expect(shallowWrapper.find('h1').text()).to.equal('Heroes');
  });

  it('should have one ul tag', () => {
    expect(shallowWrapper.find('ul')).to.have.length(1);
  });

  it('should have list item for every hero in heroes state', () => {
    const ul = wrapper.find('ul');
    expect(ul.children()).to.have.length(wrapper.props().heroes.length);
  });

  it('should not render HeroDetail component if state.her is null', () => {
    wrapper.setState({ hero: null });
    expect(wrapper.find('HeroDetail')).to.have.length(0);
  });

  it('should render HeroDetail component if state.hero is not null', () => {
    wrapper.setState({ hero: heroesMock[0] });
    expect(wrapper.find('HeroDetail')).to.have.length(1);
  });

  it('should set hero of HeroDetail to state.hero', () => {
    wrapper.setState({ hero: heroesMock[0] });
    const heroDetail = wrapper.find('HeroDetail');
    expect(heroDetail.props().hero).to.equal(wrapper.state('hero'));
  });

  it('should render NewHeroForm', () => {
    expect(wrapper.find('NewHeroForm')).to.have.length(1);
  });

  it('should set addHero prop of NewHeroForm to addHero method', () => {
    const form = wrapper.find('NewHeroForm');
    expect(form.props().addHero).to.equal(wrapper.instance().addHero);
  });

  it('should change state when selectHero is called', () => {
    wrapper.setState({ hero: null });
    expect(wrapper.state('hero')).to.equal(null);
    wrapper.instance().selectHero(heroesMock[1]);
    expect(wrapper.state('hero')).to.equal(heroesMock[1]);
  });
});
