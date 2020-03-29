import * as React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('<App>', () => {
  it('Should render', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
