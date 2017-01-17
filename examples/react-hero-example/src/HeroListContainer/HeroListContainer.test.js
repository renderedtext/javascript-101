import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import HeroListContainer from './HeroListContainer';

describe('<HeroListContainer />', () => {
  const heroesMock = [
    { name: 'Shen', type: 'Tank', health: 700, mana: 300, dmg: 55 },
    { name: 'Zed', type: 'Assaissin', health: 600, mana: 0, dmg: 70 },
    { name: 'Sona', type: 'Support', health: 550, mana: 300, dmg: 50 }
  ];
  let wrapper;
  wrapper = mount(<HeroListContainer />);

  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

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
    mock.onGet('http://localhost:3001/heroes').reply(200, heroesMock);
    wrapper.instance().componentDidMount();
    setTimeout(() => {
      expect(wrapper.state('heroes').length).to.equal(3);
      done();
    }, 0);
  });

  it('should post hero to server and add hero to list of heroes', (done) => {
    mock.onPost('http://localhost:3001/hero').reply(200, 'added');
    const initLength = wrapper.state('heroes').length;
    wrapper.instance().addHero(heroesMock[0]);
    setTimeout(() => {
      const newLength = wrapper.state('heroes').length;
      expect(newLength).to.equal(initLength + 1);
      done();
    }, 0);
  });

  it('should post hero to server and not add hero to list of heroes', (done) => {
    mock.onPost('http://localhost:3001/hero').reply(200, 'notadded');
    const initLength = wrapper.state('heroes').length;
    wrapper.instance().addHero('invalid data');
    setTimeout(() => {
      const newLength = wrapper.state('heroes').length;
      expect(newLength).to.equal(initLength);
      done();
    }, 0);
  });

  it('should delete hero on server and remove hero from list of heroes', (done) => {
    mock.onDelete('http://localhost:3001/hero/0').reply(200, 'deleted');
    const initLength = wrapper.state('heroes').length;
    wrapper.instance().removeHero(0);
    setTimeout(() => {
      const newLength = wrapper.state('heroes').length;
      expect(newLength).to.equal(initLength - 1);
      done();
    }, 0);
  });

  it('should delete hero to server and not remove hero from list of heroes', (done) => {
    mock.onDelete('http://localhost:3001/hero/0').reply(200, 'notdeleted');
    const initLength = wrapper.state('heroes').length;
    wrapper.instance().removeHero(0);
    setTimeout(() => {
      const newLength = wrapper.state('heroes').length;
      expect(newLength).to.equal(initLength);
      done();
    }, 0);
  });
});
