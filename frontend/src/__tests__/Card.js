import React from 'react';
import CardBack from '../components/MoviesTable/MovieCard/CardBack';
import { shallow, mount } from 'enzyme';

describe('<CardBack>', () => {
   it('renders ', () => {
   const wrapper = shallow(<CardBack description="desciption pour un test"/>);
   expect (wrapper.exists()).toBe(true);
   expect (wrapper).toMatchSnapshot();

   
   
   });

  // ...
});