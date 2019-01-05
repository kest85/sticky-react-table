'use strict';

exports.__esModule = true;

var _BarLoader2 = require('react-spinners/BarLoader');

var _BarLoader3 = _interopRequireDefault(_BarLoader2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cell = require('../../../styles/cell.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultInfiniteScrollCellRenderer = function DefaultInfiniteScrollCellRenderer() {
  return _react2.default.createElement(
    'div',
    { style: _cell.defaultInfiniteScrollCellStyle },
    _react2.default.createElement(_BarLoader3.default, { loading: true, width: 100, widthUnit: '%', color: '#fff', height: 8 })
  );
};

exports.default = DefaultInfiniteScrollCellRenderer;
module.exports = exports['default'];