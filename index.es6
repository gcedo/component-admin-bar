import React from 'react';
import Button from '@economist/component-link-button';

export default class AdminBar extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.node,
      renderEditLink: React.PropTypes.func,
    };
  }

  render() {
    const className = (this.props.className) ? ` ${this.props.className}` : ``;

    const children = (<div className="subscribe-message__inner-wrapper">
      {this.props.children}
    </div>);

    const editLinkProps = {
      className: `subscribe-message${className}`,
      href: 'aaa',
      target: 'bbb',
      children: 'Edit this article',
      icon: {
        icon: 'magnifier',
        useBackground: true,
        color: 'honolulu',
      }
    };
    const editLinkButton = this.props.renderEditLink ? this.props.renderEditLink(editLinkProps) : (
      <Button {...editLinkProps} />
    );
    return editLinkButton;
  }
}
