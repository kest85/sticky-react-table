import _isEqual from 'lodash/isEqual';
import _last from 'lodash/last';
import _times from 'lodash/times';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';


import { Row, HeaderRow } from './Rows';
import ColumnSwitcher from './ColumnSwitcher';
import DefaultInfiniteScrollCellRenderer from './Rows/Cells/DefaultInfiniteScrollCellRenderer';

import { ColumnDisplayName, RendererType } from '../constants';
import Errors from './Errors';

import { gdspSortedState, gdspColumns } from '../util';

import { mainContainerStyle, innerContainerStyle } from '../styles/container.styles';

var Table = (_temp = _class = function (_PureComponent) {
  _inherits(Table, _PureComponent);

  Table.validateProps = function validateProps(_ref) {
    var infiniteScrollLoadMore = _ref.infiniteScrollLoadMore,
        infiniteScrollTotalCount = _ref.infiniteScrollTotalCount;

    if ((infiniteScrollLoadMore || infiniteScrollTotalCount) && !(infiniteScrollLoadMore && infiniteScrollTotalCount)) {
      throw new Error('In order to infinite scroll functionality to work both infiniteScrollLoadMore and infiniteScrollTotalCount props must be provided');
    }
  };

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.state.columns = Table.extractColumns(props);

    Table.validateProps(props);
    return _this;
  }

  Table.prototype.render = function render() {
    var columns = this.state.columns;
    var checkboxRenderer = this.props.checkboxRenderer;

    var infiniteLoadingEnabled = this.isInfiniteLoadingEnabled();

    return React.createElement(
      'div',
      { className: 'Sticky-React-Table', style: mainContainerStyle },
      React.createElement(
        'div',
        {
          ref: this.saveInnerRef,
          className: 'Sticky-React-Table-inner',
          style: innerContainerStyle,
          onScroll: infiniteLoadingEnabled ? this.handleScroll : null
        },
        this.headerRenderer(),
        this.bodyRenderer()
      ),
      React.createElement(ColumnSwitcher, _extends({ checkboxRenderer: checkboxRenderer, columns: columns }, {
        onChange: this.handleColumnVisibilityChange
      }))
    );
  };

  return Table;
}(PureComponent), _class.validateChild = function (child) {
  if (child) {
    if (child.type.displayName === ColumnDisplayName) {
      return child;
    } else {
      throw new Error(Errors.invalidChildren);
    }
  }
}, _class.extractColumns = function (props) {
  var columns = [];

  var rowSelection = props.rowSelection,
      checkboxRenderer = props.checkboxRenderer,
      children = props.children;


  if (rowSelection) {
    columns.push({
      dataKey: 'checkbox',
      width: 30,
      title: '',
      index: 0,
      visible: true,
      isCheckbox: true,
      renderer: checkboxRenderer
    });
  }

  React.Children.forEach(children, function (child, index) {
    var _ref2 = Table.validateChild(child) || {},
        props = _ref2.props;

    if (props) {
      columns.push(_extends({}, props, { index: index + 1, visible: true }));
    }
  });

  return columns;
}, _class.defaultProps = {
  rowSelection: true,
  idKey: 'id',
  infiniteScrollLoaderRowCount: 1,
  infiniteScrollPageSize: 30,
  infiniteScrollThreshold: 10,
  infiniteScrollCellRenderer: DefaultInfiniteScrollCellRenderer
}, _class.getDerivedStateFromProps = function (nextProps, prevState) {
  var propsColumns = Table.extractColumns(nextProps);
  var stateColumns = prevState.columns;


  var derivedState = _extends({}, gdspSortedState(nextProps, prevState));

  if (!_isEqual(propsColumns.length, stateColumns.length)) {
    derivedState = _extends({}, derivedState, {
      columns: gdspColumns(propsColumns, stateColumns)
    });
  }

  return derivedState;
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    columns: [],
    sortedColumn: null,
    data: [],
    checkedRows: []
  };
  this.requestedPages = {};
  this.rowRefs = {};
  this.innerRef = {};

  this.getFixedCount = function () {
    var _props = _this2.props,
        fixed = _props.fixed,
        rowSelection = _props.rowSelection;

    if (rowSelection) {
      return fixed + 1;
    }
    return fixed;
  };

  this.getLeftStyle = function (cellIndex) {
    var fixed = _this2.getFixedCount();

    var left = 0;

    if (fixed) {
      if (cellIndex === 0) {
        return { left: left };
      } else if (cellIndex <= fixed - 1) {
        _this2.getVisibleColumns().forEach(function (_ref3, index) {
          var width = _ref3.width;

          if (index < cellIndex) {
            left += width;
          }
        });
      } else {
        left = 'auto';
      }
    }

    return { left: left };
  };

  this.isLastSticky = function (cellIndex) {
    var fixed = _this2.getFixedCount();
    var isSticky = fixed && cellIndex <= fixed - 1;
    var isLastSticky = isSticky && cellIndex === fixed - 1;
    return { isSticky: isSticky, isLastSticky: isLastSticky };
  };

  this.handleSort = function (column) {
    var onSort = _this2.props.onSort;


    if (typeof onSort === 'function') {
      onSort(column);
    } else {
      _this2.defaultSort(column);
    }
  };

  this.handleRowCheck = function (id) {
    var data = _this2.state.data;
    var _props2 = _this2.props,
        onRowCheck = _props2.onRowCheck,
        idKey = _props2.idKey,
        selectedRows = _props2.selectedRows;


    var checkedRows = [].concat(_this2.getCheckedRows());

    if (id === 'all') {
      if (checkedRows.length === data.length) {
        checkedRows = [];
      } else {
        checkedRows = data.map(function (row) {
          return row[idKey];
        });
      }
    } else {
      var index = checkedRows.findIndex(function (rowId) {
        return rowId === id;
      });

      if (index !== -1) {
        checkedRows.splice(index, 1);
      } else {
        checkedRows.push(id);
      }
    }

    if (selectedRows && onRowCheck) {
      onRowCheck(checkedRows);
    } else {
      _this2.setState({
        checkedRows: checkedRows
      });
    }
  };

  this.getCheckedRows = function () {
    return _this2.props.selectedRows || _this2.state.checkedRows;
  };

  this.isRowSelected = function (rowId) {
    return _this2.getCheckedRows().includes(rowId);
  };

  this.isAllRowsSelected = function () {
    return _this2.props.data.length === _this2.getCheckedRows().length;
  };

  this.handleColumnVisibilityChange = function (columnIndex) {
    if (typeof columnIndex === 'number') {
      var columns = [].concat(_this2.state.columns);
      columns[columnIndex].visible = !columns[columnIndex].visible;
      _this2.setState({
        columns: columns
      });
    }
  };

  this.checkIfFirstColumnIsCheckbox = function () {
    return _this2.state.columns.length > 0 && _this2.state.columns[0].isCheckbox;
  };

  this.handleReorderColumn = function (startIndex, endIndex) {
    if (startIndex !== null && endIndex !== null) {
      if (startIndex === 0 || endIndex === 0 && _this2.checkIfFirstColumnIsCheckbox()) {
        return;
      }
      var columns = [].concat(_this2.state.columns);

      var removedColumns = columns.splice(startIndex, 1);
      columns.splice(endIndex, 0, removedColumns[0]);
      _this2.setState({
        columns: columns
      });
    }
  };

  this.handleAutoResizeColumn = function (cellIndex) {
    var columnCells = _this2.innerRef.getElementsByClassName('Sticky-React-Table--Row-Cell-' + cellIndex);
    var columns = [].concat(_this2.state.columns);
    var mainElement = document.createElement('div');

    var maxWidth = columns[cellIndex].width;

    mainElement.classList.add('main-div');
    _this2.innerRef.appendChild(mainElement);

    maxWidth = Array.prototype.reduce.call(columnCells, function (maxWidth, cell) {
      var dummyElement = document.createElement('div');
      dummyElement.classList.add('my-class');
      mainElement.appendChild(dummyElement);
      dummyElement.innerHTML = cell.outerHTML.replace(/width:\s*\d+\.*\d*px\s*;/, 'width: max-content;');

      maxWidth = Math.max(maxWidth, dummyElement.getBoundingClientRect().width);
      return maxWidth;
    }, maxWidth);

    _this2.innerRef.removeChild(mainElement);

    columns[cellIndex].width = maxWidth;
    _this2.setState({
      columns: columns
    });
  };

  this.headerRenderer = function () {
    var _state = _this2.state,
        sortedColumn = _state.sortedColumn,
        data = _state.data;
    var _props3 = _this2.props,
        checkboxRenderer = _props3.checkboxRenderer,
        idKey = _props3.idKey,
        className = _props3.headerClassName;


    var isAllSelected = _this2.isAllRowsSelected();
    var checkedRows = _this2.getCheckedRows();
    var columns = _this2.getVisibleColumns();

    return React.createElement(HeaderRow, _extends({
      sortedColumn: sortedColumn,
      columns: columns,
      checkboxRenderer: checkboxRenderer,
      checkedRows: checkedRows,
      idKey: idKey,
      isAllSelected: isAllSelected,
      className: className,
      data: data
    }, {
      rowIndex: 0,
      styleCalculator: _this2.getLeftStyle,
      stickyFunction: _this2.isLastSticky,
      onDragEnd: _this2.handleDragEnd,
      onSort: _this2.handleSort,
      onCheck: _this2.handleRowCheck,
      onReorderColumn: _this2.handleReorderColumn,
      onAutoResizeColumn: _this2.handleAutoResizeColumn
    }));
  };

  this.defaultSort = function (column) {
    var sortedColumn = _this2.state.sortedColumn;


    if (!sortedColumn || sortedColumn.dataKey !== column.dataKey) {
      _this2.setState({
        sortedColumn: _extends({}, column, {
          dir: 'ASC'
        })
      });
    } else {
      var newSortDir = 'DESC';
      if (!sortedColumn.dir || sortedColumn.dir === 'DESC') {
        newSortDir = 'ASC';
      }
      var newSortedColumn = _extends({}, sortedColumn, {
        dir: newSortDir
      });
      _this2.setState({
        sortedColumn: newSortedColumn
      });
    }
  };

  this.getVisibleColumns = function () {
    return _this2.state.columns.filter(function (column) {
      return column.visible;
    });
  };

  this.saveRowRef = function (ref, rowIndex) {
    _this2.rowRefs[rowIndex] = ref;
  };

  this.bodyRenderer = function () {
    var data = _this2.state.data;
    var _props4 = _this2.props,
        rowSelection = _props4.rowSelection,
        checkboxRenderer = _props4.checkboxRenderer,
        idKey = _props4.idKey,
        rowClassName = _props4.rowClassName,
        renderer = _props4.rowRenderer,
        infiniteScrollLoaderRowCount = _props4.infiniteScrollLoaderRowCount,
        infiniteScrollCellRenderer = _props4.infiniteScrollCellRenderer;


    var columns = _this2.getVisibleColumns();

    var getRows = function getRows(data, isLoaderRow) {
      var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      return data.map(function (rowData, index) {
        var id = rowData[idKey];
        var isChecked = _this2.isRowSelected(id);
        var rowIndex = startIndex + index + 1;

        return React.createElement(Row, _extends({
          id: id,
          columns: columns,
          rowData: rowData,
          rowSelection: rowSelection,
          checkboxRenderer: checkboxRenderer,
          rowClassName: rowClassName,
          isChecked: isChecked,
          rowIndex: rowIndex,
          renderer: renderer,
          infiniteScrollCellRenderer: infiniteScrollCellRenderer,
          isLoaderRow: isLoaderRow
        }, {
          getRef: _this2.saveRowRef,
          styleCalculator: _this2.getLeftStyle,
          stickyFunction: _this2.isLastSticky,
          onDragEnd: _this2.handleDragEnd,
          key: 'sticky-table-row-' + (id || rowIndex),
          onCheck: _this2.handleRowCheck
        }));
      });
    };

    var rows = getRows(data);

    var unloadedRowCount = _this2.getUnloadedRowCount();

    if (unloadedRowCount) {
      /**
       *  calculate how many rows to display as loader rows
       *  if almost all data is loaded - display only n remaining rows
       */
      var loaderRowCount = Math.min(infiniteScrollLoaderRowCount, unloadedRowCount);

      var rowCount = rows.length;

      // generate fake loader row data (we basically only need some distinct ids)
      var loaderRowsData = _times(loaderRowCount, function (index) {
        return {
          id: 'sticky-react-loader-row-' + (rowCount + index + 1)
        };
      });

      return rows.concat(getRows(loaderRowsData, true, rowCount));
    }

    return rows;
  };

  this.handleDragEnd = function (columnIndex) {
    return function (e) {
      e.stopPropagation();
      var widthDiff = e.clientX - e.target.getBoundingClientRect().left;
      var newColumns = [].concat(_this2.state.columns);

      newColumns[columnIndex] = _extends({}, newColumns[columnIndex], {
        width: newColumns[columnIndex].width + widthDiff
      });

      _this2.setState({
        columns: newColumns
      });
    };
  };

  this.handleDragHandlerRef = function (ref) {
    _this2.dragHandle = ref;
  };

  this.getUnloadedRowCount = function () {
    var _props5 = _this2.props,
        infiniteScrollLoadMore = _props5.infiniteScrollLoadMore,
        infiniteScrollTotalCount = _props5.infiniteScrollTotalCount,
        data = _props5.data;


    if (infiniteScrollLoadMore && infiniteScrollTotalCount) {
      return infiniteScrollTotalCount - data.length;
    }

    return 0;
  };

  this.isInfiniteLoadingEnabled = function () {
    return !!_this2.getUnloadedRowCount();
  };

  this.handleScroll = function () {
    var _props6 = _this2.props,
        infiniteScrollThreshold = _props6.infiniteScrollThreshold,
        infiniteScrollLoadMore = _props6.infiniteScrollLoadMore,
        infiniteScrollPageSize = _props6.infiniteScrollPageSize,
        data = _props6.data;


    var dataCount = data.length;
    var nextPage = Math.floor(dataCount / infiniteScrollPageSize) + 1;

    if (!_this2.requestedPages[nextPage]) {
      // const targetRow = this.rowRefs[dataCount - infiniteScrollThreshold];
      var targetRow = document.getElementsByClassName("Sticky-React-Table--Row")[dataCount - infiniteScrollThreshold - 1];

      var _innerRef$getBounding = _this2.innerRef.getBoundingClientRect(),
          innerTop = _innerRef$getBounding.top,
          viewPortHeight = _innerRef$getBounding.height;

      var _targetRow$getBoundin = targetRow.getBoundingClientRect(),
          rowTop = _targetRow$getBoundin.top;

      if (viewPortHeight - rowTop + innerTop > 0) {
        _this2.requestedPages[nextPage] = true;

        infiniteScrollLoadMore(nextPage * infiniteScrollPageSize, _last(data));
      }
    }
  };

  this.saveInnerRef = function (ref) {
    var innerRef = _this2.props.innerRef;


    _this2.innerRef = ref;
    innerRef && innerRef(ref);
  };
}, _temp);
export { Table as default };
Table.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired,
  fixed: PropTypes.number,
  data: PropTypes.array.isRequired,
  onSort: PropTypes.func,
  rowSelection: PropTypes.bool,
  checkboxRenderer: RendererType,
  onRowCheck: PropTypes.func,
  idKey: PropTypes.string,
  rowClassName: PropTypes.func,
  headerClassName: PropTypes.string,
  rowRenderer: PropTypes.func,
  selectedRows: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  infiniteScrollTotalCount: PropTypes.number,
  infiniteScrollLoadMore: PropTypes.func,
  infiniteScrollThreshold: PropTypes.number,
  infiniteScrollLoaderRowCount: PropTypes.number,
  infiniteScrollPageSize: PropTypes.number,
  infiniteScrollCellRenderer: RendererType,
  innerRef: PropTypes.func
} : {};