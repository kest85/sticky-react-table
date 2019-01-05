'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = function Column() {
  return null;
};

Column.propTypes = {
  alwaysVisible: _propTypes2.default.bool
};

Column.defaultProps = {
  alwaysVisible: false,
  filterAlignment: 'left'
};

Column.displayName = _constants.ColumnDisplayName;

exports.default = Column;
module.exports = exports['default'];