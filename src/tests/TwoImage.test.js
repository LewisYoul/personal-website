import React from 'react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TwoImage from '../skills/TwoImage'

configure({ adapter: new Adapter() });

let wrapper, instance;

beforeEach(() => {
  wrapper = shallow(
    <TwoImage imageUrl1="first url" imageUrl2="second url"/>
  );
});

describe("TwoImage", () => {
  describe("#render", () => {
    it("renders two <img> tags", () => {
      expect(wrapper.find('img').length).toEqual(2)
    });
    it("sets 'imageUrl1' prop to be the 'src' of the first <img>", () => {
      expect(wrapper.find('img').first().prop('src')).toEqual("first url")
    });
    it("sets 'imageUrl2' prop to be the 'src' of the second <img>", () => {
      expect(wrapper.find('img').at(1).prop('src')).toEqual("second url")
    });
  });
});

// "https://thinkster.io/assets/homepage/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png"
// "http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png"
