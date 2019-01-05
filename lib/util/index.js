'use strict';

exports.__esModule = true;
exports.gdspColumns = exports.gdspSortedState = exports.getSortableCellStyle = exports.stopPropagation = exports.renderElement = undefined;

var _orderBy2 = require('lodash/orderBy');

var _orderBy3 = _interopRequireDefault(_orderBy2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.dragHandlerSizing = dragHandlerSizing;
exports.sort = sort;
exports.getCellStyle = getCellStyle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cell = require('../styles/cell.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dragHandlerSizing(ref) {
  var _ref$getBoundingClien = ref.getBoundingClientRect(),
      left = _ref$getBoundingClien.left;

  ref.style.left = left;
  ref.style.top = 0;
  ref.style.bottom = 0;
  ref.style.position = 'fixed';

  return ref;
}

function sort(data, key) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';

  return (0, _orderBy3.default)(data, key, direction);
}

function getCellStyle(style, isSticky) {
  var isReorderableHeaderCell = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var cellStyle = _extends({}, style, _cell.defaultCellStyle);

  if (isSticky) {
    cellStyle = _extends({}, cellStyle, _cell.stickyCellStyle);
  }

  if (isReorderableHeaderCell) {
    cellStyle = _extends({}, cellStyle, _cell.reorderableHeaderCellStyle);
  }

  return cellStyle;
}

var renderElement = exports.renderElement = function renderElement(element, props, defaultRenderer) {
  if (!element) {
    return defaultRenderer;
  }

  return _react2.default.isValidElement(element) ? _react2.default.cloneElement(element, props) : _react2.default.createElement(element, props);
};

var stopPropagation = exports.stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

var getSortableCellStyle = exports.getSortableCellStyle = function getSortableCellStyle(isSortable) {
  if (isSortable) {
    return _cell.sortableHeaderCellStyle;
  }

  return {};
};

var gdspSortedState = exports.gdspSortedState = function gdspSortedState(nextProps, prevState) {
  if (nextProps.onSort || prevState.sortedColumn === null) {
    return { data: nextProps.data };
  }

  return {
    data: sort(nextProps.data, prevState.sortedColumn.dataKey, prevState.sortedColumn.dir.toLowerCase())
  };
};

var gdspColumns = exports.gdspColumns = function gdspColumns(propsColumns, stateColumns) {
  return propsColumns.map(function (column) {
    var stateColumn = stateColumns.find(function (_ref) {
      var dataKey = _ref.dataKey;
      return dataKey === column.dataKey;
    });

    if (stateColumn) {
      return _extends({}, column, stateColumn);
    }

    return column;
  });
};