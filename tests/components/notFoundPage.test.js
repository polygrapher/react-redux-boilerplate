import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../src/components/NotFoundPage';

test('should render not found page', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});