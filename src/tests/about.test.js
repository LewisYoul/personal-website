import React from 'react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from '../about/about.js'

configure({ adapter: new Adapter() });

let wrapper, instance;

beforeEach(() => {
  wrapper = shallow(<About />);
});

describe('About', () => {
  describe('#render', () => {
    it("contains a <div> with an id of 'about'", () => {
      expect(wrapper.find('#about').length).toEqual(1)
    });
    it("contains an <img> tag", () => {
      expect(wrapper.find('img').length).toEqual(1)
    });
  });
});
