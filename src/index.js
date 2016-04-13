import React from 'react';
import Button from '@economist/component-link-button';
import BarWrapper from '@economist/component-bar-wrapper';

export default function AdminBar({ className, title, editLinkHref, renderEditLink }) {
  const classNamesList = [ 'admin-bar' ];
  const children = [];
  if (className) {
    classNamesList.push(className);
  }

  const barWrapperClassName = classNamesList.join(' ');
  if (title) {
    children.push((
      <span key="title" className="admin-bar__title">{title}</span>
    ));
  }
  const editLinkDefaultProps = {
    className: 'admin-bar__edit-link',
    href: editLinkHref,
    target: '_blank',
    children: 'Edit this article',
    key: 'editLink',
  };
  const editLinkButton = renderEditLink ? renderEditLink() : (
    <Button {...editLinkDefaultProps} />
  );
  children.push(editLinkButton);
  return (
    <BarWrapper className={barWrapperClassName} close={false}>
      {children}
    </BarWrapper>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AdminBar.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    renderEditLink: React.PropTypes.func,
    editLinkHref: React.PropTypes.string,
    title: React.PropTypes.string,
  };
}
