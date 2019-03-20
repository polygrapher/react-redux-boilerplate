import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../src/components/Header';
import { start } from 'repl';


let wrapper, startLogout;

beforeEach(() => {
    startLogout = jest.fn(),
    wrapper = shallow(
        <Header
            startLogout={startLogout}
        />
    );
});

test('Header renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot('Expensify');
});

test('startLogout action is called on logout button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toBeCalled();
});
