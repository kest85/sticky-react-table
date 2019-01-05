'use strict';

exports.__esModule = true;
exports.RendererType = exports.rowPropKeys = exports.headerCellPropKeys = exports.cellPropKeys = exports.ColumnDisplayName = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnDisplayName = exports.ColumnDisplayName = 'Column';

var cellPropKeys = exports.cellPropKeys = ['id', 'rowData', 'dataKey', 'cellData', 'isChecked', 'isCheckbox', 'style', 'title', 'isAllSelected', 'checkboxRenderer'];

var headerCellPropKeys = exports.headerCellPropKeys = [].concat(cellPropKeys, ['isSortable']);

var rowPropKeys = exports.rowPropKeys = ['id', 'rowData', 'rowIndex', 'columns', 'isChecked'];

var RendererType = exports.RendererType = _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]);