import React from 'react';
import {shallow} from 'enzyme';
import Loader from '../../src/components/Loader';

test('should render edit expense page correctly', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
});