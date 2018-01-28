import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

let wrapper, instance;

beforeEach(() => {
  wrapper = shallow(<App />);
  instance = wrapper.instance()
});

describe('App', () => {

  describe('#render', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });
    it("contains a <div> with the id 'about'", () => {
      expect(wrapper.find('#about').length).toEqual(1)
    });
    it("contains a <div> with the id 'skills'", () => {
      expect(wrapper.find('#skills').length).toEqual(1)
    });
    it("contains a <div> with the id 'portfolio'", () => {
      expect(wrapper.find('#portfolio').length).toEqual(1)
    });
    it("contains a <div> with the id 'blog'", () => {
      expect(wrapper.find('#blog').length).toEqual(1)
    });
  });

  describe('Initial state', () => {
    it('showAbout is set to true', () => {
      expect(instance.state.showAbout).toEqual(true)
    });
    it('showSkills is set to false', () => {
      expect(instance.state.showSkills).toEqual(false)
    });
    it('showPortfolio is set to false', () => {
      expect(instance.state.showPortfolio).toEqual(false)
    });
    it('showBlog is set to false', () => {
      expect(instance.state.showBlog).toEqual(false)
    });
    it("unclicked returns the string 'unclicked'", () => {
      expect(instance.state.unclicked).toEqual('unclicked')
    });
    it("clicked returns the string 'clicked'", () => {
      expect(instance.state.clicked).toEqual('clicked')
    });
  });

  describe('#showAbout', () => {
    it("Changes the state of 'showAbout' to be 'true'", () => {
      instance.resetStatesToFalse()
      instance.showAbout()
      expect(instance.state.showAbout).toEqual(true)
    });
  });

  describe('#showSkills', () => {
    it("Changes the state of 'showSkills' to be 'true'", () => {
      instance.showSkills()
      expect(instance.state.showSkills).toEqual(true)
    });
  });

  describe('#showPortfolio', () => {
    it("Changes the state of 'showPortfolio' to be 'true'", () => {
      instance.showPortfolio()
      expect(instance.state.showPortfolio).toEqual(true)
    });
  });

});
