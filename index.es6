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
    if (this.props.className) {
      classNamesList.push(this.props.className);
    }

    const className = classNamesList.join(' ');

    const editLinkProps = {
      className: `admin-bar__edit-link`,
      href: `${document.location.href}edit`,
      target: '_blank',
      children: 'Edit this article',
    };
    const barTitle = this.props.title ? (
      <span className='admin-bar__title'>{this.props.title}</span>
    ) : null;
    const editLinkButton = this.props.renderEditLink ? this.props.renderEditLink(editLinkProps) : (
      <Button {...editLinkProps} />
    );
    return (<BarWrapper className={className} close={false}>
      {barTitle}
      {editLinkButton}
    </BarWrapper>);
  }
}
