import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../src/components/LoginPage';

let wrapper, history, startLogin;

beforeEach(() => {
    history = {push: jest.fn()};
    startLogin = jest.fn();
    wrapper = shallow(
        <LoginPage
            history={history}
            startLogin={startLogin}
        />
    );
});

test('should correctly render login page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render login page', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toBeCalled();
});