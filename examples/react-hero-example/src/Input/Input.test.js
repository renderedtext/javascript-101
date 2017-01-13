import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import ReactDOM from 'react-dom';
import Input from './Input';

describe('<Input />', () => {
  let mockFunction;
  let wrapper;
  let input;

  beforeEach(() => {
    mockFunction = sinon.spy();
    wrapper = mount(<Input type="number"
                           name="Zed"
                           handleInputChange={ mockFunction }/>);
    input = wrapper.find('input');
  });

  it('doesn\'t crash', () => {
    shallow(<Input />);
  });

  it('should render one div element', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render div element of class form-group', () => {
    expect(wrapper.hasClass('form-group')).to.equal(true);
  });

  it('should have one input field', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have input field of className props.className', () => {
    expect(input.props().className).to.equal('form-control');
  });

  it('should have input field with type props.type', () => {
    expect(input.props().type).to.equal('number');
  });

  it('should have input field with name "Zed"', () => {
    expect(input.props().name).to.equal('Zed');
  });

  it('should have defined onChange prop', () => {
    expect(input.props().onChange).to.not.be.undefined;
  });

  it('should have defined handleInputChange prop', () => {
    expect(wrapper.props().handleInputChange).to.not.be.undefined;
  });

  it('should change value of input field', () => {
    input.node.value = 'Entered text';
    input.simulate('change', input);
    expect(wrapper.state('value')).to.equal('Entered text');
  });

  it('should call passed function once', () => {
    input.node.value = 'a';
    input.simulate('change', input);
    expect(mockFunction).to.have.property('callCount', 1);
  });
});
