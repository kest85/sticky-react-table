'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rowStyles = exports.rowStyles = {
  display: 'flex',
  alignSelf: 'stretch',
  flexShrink: 0,
  minWidth: '100%',
  width: 'max-content'
};

var headerStyles = exports.headerStyles = _extends({}, rowStyles, {
  top: 0,
  left: 'auto',
  zIndex: 10,
  position: 'sticky'
});