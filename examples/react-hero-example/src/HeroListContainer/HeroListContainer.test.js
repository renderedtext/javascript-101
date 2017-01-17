import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import HeroListContainer from './HeroListContainer';

describe('<HeroListContainer />', () => {
  const wrapper = mount(<HeroListContainer />);
  const heroesMock = [
    { name: 'Shen', type: 'Tank', health: 700, mana: 300, dmg: 55 },
    { name: 'Zed', type: 'Assaissin', health: 600, mana: 0, dmg: 70 },
    { name: 'Sona', type: 'Support', health: 550, mana: 300, dmg: 50 }
  ];

  const mock = new MockAdapter(axios);
  mock.onGet('http://localhost:3001/heroes').reply(200, heroesMock);
  mock.onPost('http://localhost:3001/hero').reply(200, 'added');
  mock.onDelete('http://localhost:3001/hero/0').reply(200, 'deleted');

  it('should have heroes state defined', () => {
    expect(wrapper.state('heroes')).to.not.be.undefined;
  });

  it('should have empty heroes state array', () => {
    expect(wrapper.state('heroes').length).to.equal(0);
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

  it('should get list of heroes from server', (done) => {
    //const wrp = mount(<HeroListContainer />);
    wrapper.instance().componentDidMount();
    setTimeout(() => {
      expect(wrapper.state('heroes').length).to.equal(3);
      console.log(wrapper.state('heroes'));
      done();
    }, 0);
  });

  it('should post hero to server', (done) => {
    const initLength = wrapper.state('heroes').length;
    wrapper.instance().addHero(heroesMock[0]);
    setTimeout(() => {
      const newLength = wrapper.state('heroes').length;
      expect(newLength).to.equal(initLength + 1);
      console.log(wrapper.state('heroes'));
      done();
    }, 0);
  });

  it('should delete hero on server', (done) => {
    const initLength = wrapper.state('heroes').length;
    wrapper.instance().removeHero(0);
    setTimeout(() => {
      const newLength = wrapper.state('heroes').length;
      expect(newLength).to.equal(initLength - 1);
      console.log(newLength);
      done();
    });
  });
});
