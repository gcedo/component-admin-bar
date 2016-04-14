import 'babel/polyfill';
import AdminBar from '../src';
import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai from 'chai';
import { mount } from 'enzyme';
chai.should();
chai.use(chaiEnzyme());
describe('A admin bar', () => {
  describe('it\'s a React component', () => {
    it('is compatible with React.Component', () => {
      AdminBar.should.be.a('function');
    });
    it('can have a title', () => {
      const adminBar = mount(React.createElement(AdminBar, {
        title: 'Just a title',
        editLinkHref: 'http://www.economist.com',
      }));
      adminBar.find('.admin-bar__title').should.have.text('Just a title');
    });
    it('provides capabilty to change the render component of the editLink via the renderEditLink prop', () => {
      /* eslint-disable react/display-name */
      const adminBar = mount(React.createElement(
        AdminBar,
        { renderEditLink: (props) => (
          <a {...props}
            href="urlLink"
            target="_top"
            key="renderEditLink"
          />),
        }));
      const anchor = adminBar.find('a');
      anchor.should.have.attr('href', 'urlLink');
      anchor.should.have.attr('target', '_top');
    });
  });
});
