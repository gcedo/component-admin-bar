'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

var _economistComponentBarWrapper = require('@economist/component-bar-wrapper');

var _economistComponentBarWrapper2 = _interopRequireDefault(_economistComponentBarWrapper);

var AdminBar = (function (_React$Component) {
  _inherits(AdminBar, _React$Component);

  function AdminBar() {
    _classCallCheck(this, AdminBar);

    _React$Component.apply(this, arguments);
  }

  AdminBar.prototype.render = function render() {
    var classNamesList = ['admin-bar'];
    var children = [];
    if (this.props.className) {
      classNamesList.push(this.props.className);
    }

    var className = classNamesList.join(' ');
    if (this.props.title) {
      children.push(_react2['default'].createElement(
        'span',
        { key: 'title', className: 'admin-bar__title' },
        this.props.title
      ));
    }
    var editLinkDefaultProps = {
      className: 'admin-bar__edit-link',
      href: this.props.editLinkHref,
      target: '_blank',
      children: 'Edit this article',
      key: 'editLink'
    };
    var editLinkButton = this.props.renderEditLink ? this.props.renderEditLink() : _react2['default'].createElement(_economistComponentLinkButton2['default'], editLinkDefaultProps);
    children.push(editLinkButton);
    return _react2['default'].createElement(
      _economistComponentBarWrapper2['default'],
      { className: className, close: false },
      children
    );
  };

  _createClass(AdminBar, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react2['default'].PropTypes.string,
        children: _react2['default'].PropTypes.node,
        renderEditLink: _react2['default'].PropTypes.func,
        editLinkHref: _react2['default'].PropTypes.string,
        title: _react2['default'].PropTypes.string
      };
    }
  }]);

  return AdminBar;
})(_react2['default'].Component);

exports['default'] = AdminBar;
module.exports = exports['default'];