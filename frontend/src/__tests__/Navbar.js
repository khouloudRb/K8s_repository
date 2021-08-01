import React from 'react';
import Navbar from '../components/Navbar';
import { shallow, render } from 'enzyme';



describe('<Navbar>', () => {
   it('renders ', () => {
   const wrapper = shallow(<Navbar />);
   expect (wrapper.exists()).toBe(true);
   expect (wrapper).toMatchSnapshot();
   expect(wrapper.find('Collapse')).toBeDefined();

  })

  // ...
});
