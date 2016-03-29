'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createElement(_index2['default'], {
  title: 'Admin bar',
  classNamePrefix: 'admin-bar-wrapper',
  className: 'admin-bar-wrapper',
  editLinkHref: 'http://www.economist.com'
});
module.exports = exports['default'];