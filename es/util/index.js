import _orderBy from 'lodash/orderBy';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';


import { defaultCellStyle, stickyCellStyle, reorderableHeaderCellStyle, sortableHeaderCellStyle } from '../styles/cell.styles';

export function dragHandlerSizing(ref) {
  var _ref$getBoundingClien = ref.getBoundingClientRect(),
      left = _ref$getBoundingClien.left;

  ref.style.left = left;
  ref.style.top = 0;
  ref.style.bottom = 0;
  ref.style.position = 'fixed';

  return ref;
}

export function sort(data, key) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';

  return _orderBy(data, key, direction);
}

export function getCellStyle(style, isSticky) {
  var isReorderableHeaderCell = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var cellStyle = _extends({}, style, defaultCellStyle);

  if (isSticky) {
    cellStyle = _extends({}, cellStyle, stickyCellStyle);
  }

  if (isReorderableHeaderCell) {
    cellStyle = _extends({}, cellStyle, reorderableHeaderCellStyle);
  }

  return cellStyle;
}

export var renderElement = function renderElement(element, props, defaultRenderer) {
  if (!element) {
    return defaultRenderer;
  }

  return React.isValidElement(element) ? React.cloneElement(element, props) : React.createElement(element, props);
};

export var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

export var getSortableCellStyle = function getSortableCellStyle(isSortable) {
  if (isSortable) {
    return sortableHeaderCellStyle;
  }

  return {};
};

export var gdspSortedState = function gdspSortedState(nextProps, prevState) {
  if (nextProps.onSort || prevState.sortedColumn === null) {
    return { data: nextProps.data };
  }

  return {
    data: sort(nextProps.data, prevState.sortedColumn.dataKey, prevState.sortedColumn.dir.toLowerCase())
  };
};

export var gdspColumns = function gdspColumns(propsColumns, stateColumns) {
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