var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { HeaderCell } from './Cells';

import { headerStyles } from '../../styles/row.styles';
import { RendererType } from '../../constants';

var HeaderRow = function (_PureComponent) {
  _inherits(HeaderRow, _PureComponent);

  function HeaderRow() {
    var _temp, _this, _ret;

    _classCallCheck(this, HeaderRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      draggingColumn: null,
      dragOverColumn: null
    }, _this.onHeaderDragOver = function (cellIndex) {
      _this.setState({
        dragOverColumn: cellIndex
      });
    }, _this.onHeaderDragStart = function (cellIndex) {
      _this.setState({
        draggingColumn: cellIndex
      });
    }, _this.onHeaderDragEnd = function () {
      var _this$state = _this.state,
          draggingColumn = _this$state.draggingColumn,
          dragOverColumn = _this$state.dragOverColumn;

      _this.props.onReorderColumn(draggingColumn, dragOverColumn);
    }, _this.renderColumns = function () {
      var _this$props = _this.props,
          columns = _this$props.columns,
          rowIndex = _this$props.rowIndex,
          styleCalculator = _this$props.styleCalculator,
          stickyFunction = _this$props.stickyFunction,
          onDragEnd = _this$props.onDragEnd,
          onSort = _this$props.onSort,
          sortedColumn = _this$props.sortedColumn,
          checkedRows = _this$props.checkedRows,
          onCheck = _this$props.onCheck,
          isAllSelected = _this$props.isAllSelected,
          checkboxRenderer = _this$props.checkboxRenderer,
          data = _this$props.data,
          onAutoResizeColumn = _this$props.onAutoResizeColumn;


      return columns.map(function (column, cellIndex) {
        var title = column.title,
            width = column.width,
            dataKey = column.dataKey,
            renderer = column.headerRenderer,
            isSortable = column.isSortable,
            isCheckbox = column.isCheckbox,
            filterRenderer = column.filterRenderer,
            filterTrigger = column.filterTrigger,
            filterAlignment = column.filterAlignment;

        var style = _extends({ width: width }, styleCalculator(cellIndex));

        var _stickyFunction = stickyFunction(cellIndex),
            isSticky = _stickyFunction.isSticky,
            isLastSticky = _stickyFunction.isLastSticky;

        return React.createElement(HeaderCell, _extends({
          title: title,
          width: width,
          dataKey: dataKey,
          cellIndex: cellIndex,
          style: style,
          isSticky: isSticky,
          isLastSticky: isLastSticky,
          renderer: renderer,
          rowIndex: rowIndex,
          isSortable: isSortable,
          onSort: onSort,
          sortedColumn: sortedColumn,
          checkedRows: checkedRows,
          onCheck: onCheck,
          isCheckbox: isCheckbox,
          isAllSelected: isAllSelected,
          filterRenderer: filterRenderer,
          filterTrigger: filterTrigger,
          filterAlignment: filterAlignment,
          data: data
        }, {
          onDragEnd: onDragEnd(cellIndex),
          key: 'sitcky-table-header-' + cellIndex,
          id: 'all',
          checkboxRenderer: isCheckbox ? checkboxRenderer : null,
          onHeaderDragStart: _this.onHeaderDragStart,
          onHeaderDragEnd: _this.onHeaderDragEnd,
          onHeaderDragOver: _this.onHeaderDragOver,
          onAutoResizeColumn: onAutoResizeColumn
        }));
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HeaderRow.prototype.render = function render() {
    var className = this.props.className;


    return React.createElement(
      'div',
      {
        className: classNames(className, 'Sticky-React-Table--Header'),
        style: headerStyles
      },
      this.renderColumns()
    );
  };

  return HeaderRow;
}(PureComponent);

export { HeaderRow as default };


HeaderRow.propTypes = process.env.NODE_ENV !== "production" ? {
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  rowIndex: PropTypes.number.isRequired,
  styleCalculator: PropTypes.func.isRequired,
  stickyFunction: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  sortedColumn: PropTypes.object,
  onSort: PropTypes.func,
  isSortable: PropTypes.bool,
  checkedRows: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
  isAllSelected: PropTypes.bool.isRequired,
  className: PropTypes.string,
  checkboxRenderer: RendererType,
  onAutoResizeColumn: PropTypes.func.isRequired,
  onReorderColumn: PropTypes.func
} : {};