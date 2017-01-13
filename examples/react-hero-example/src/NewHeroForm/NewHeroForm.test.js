import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import NewHeroForm from './NewHeroForm';

describe('<NewHeroForm />', () =>{
  const addHeroMock = sinon.spy();
  const wrapper = mount(<NewHeroForm addHero={ addHeroMock } />);

  it('should have hero state defined', () => {
    expect(wrapper.state('hero')).to.not.be.undefined;
  });

  it('should have addHero prop defined', () => {
    expect(wrapper.props().addHero).to.not.be.undefined;
  });

  it('should have one h1 tag', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render "Add New Hero" in h1 tag', () => {
    expect(wrapper.find('h1').text()).to.equal('Add New Hero');
  });

  it('should have one form element', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should have form with className "form-inline"', () => {
    expect(wrapper.find('form').hasClass('form-inline')).to.equal(true);
  });

  it('should have 5 Input components', () => {
    expect(wrapper.find('Input')).to.have.length(5);
  });

  it('should set handleInputChange prop of every Input', () => {
    const inputs = wrapper.find('Input');
    inputs.forEach(node => {
      expect(node.props().handleInputChange).to.not.be.undefined;
      expect(node.props().handleInputChange).to.equal(wrapper.instance().handleInputChange);
    });
  });

  it('should change state when handleInputChange is called', () => {
    wrapper.instance().handleInputChange('name', 'Lucian');
    expect(wrapper.state('hero').name).to.equal('Lucian');
  });

  it('should have one button in form', () => {
    const form = wrapper.find('button');
    expect(form.find('button')).to.have.length(1);
  });

  it('should render "Add Hero" in button', () => {
    const form = wrapper.find('button');
    expect(form.find('button').text()).to.equal('Add Hero');
  });

  it('should call addHero prop when button is clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(addHeroMock).to.have.property('callCount', 1);
  });
});
