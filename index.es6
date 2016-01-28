import React from 'react';
import Button from '@economist/component-link-button';
import BarWrapper from '@economist/component-bar-wrapper';

export default class AdminBar extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.node,
      renderEditLink: React.PropTypes.func,
      title: React.PropTypes.string,
    };
  }

  render() {
    const classNamesList = [ 'admin-bar' ];
    const children = [];
    if (this.props.className) {
      classNamesList.push(this.props.className);
    }

    const className = classNamesList.join(' ');
    if (this.props.title) {
      children.push((
        <span key="title" className="admin-bar__title">{this.props.title}</span>
      ));
    }
    const editLinkDefaultProps = {
      className: `admin-bar__edit-link`,
      href: `${document.location.href}edit`,
      target: '_blank',
      children: 'Edit this article',
      key: 'editLink',
    };
    const editLinkButton = this.props.renderEditLink ? this.props.renderEditLink() : (
      <Button {...editLinkDefaultProps} />
    );
    children.push(editLinkButton);
    return (<BarWrapper className={className} close={false}>
      {children}
    </BarWrapper>);
  }
}
