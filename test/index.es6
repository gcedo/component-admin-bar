import AdminBar from '../index.es6';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
/* eslint-disable newline-after-var */
describe(`A admin bar`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      AdminBar.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(<AdminBar/>).should.equal(true);
    });
    it(`it can have a title`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(AdminBar, { title: 'Just a title' }));
      const title = shallowRenderer.getRenderOutput().props.children[0];
      title.props.children.should.equal('Just a title');
      title.props.className.should.equal('admin-bar__title');
    });
    it(`provide capabilty to change the render component of the editLink via the renderEditLink prop`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      /* eslint-disable react/display-name */
      shallowRenderer.render(React.createElement(AdminBar,
         { renderEditLink: (props) => {
           return (<a
             href="urlLink"
             target="_top"
             {...props}
             key="renderEditLink"
                   />);
         } }));
      const anchor = shallowRenderer.getRenderOutput().props.children[0];
      anchor.type.should.equal('a');
      anchor.props.href.should.equal('urlLink');
      anchor.props.target.should.equal('_top');
    });
  });
});
