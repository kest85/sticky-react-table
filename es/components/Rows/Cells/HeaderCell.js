import _pick from 'lodash/pick';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';

import classNames from 'classnames';

import CheckboxCell from '../../CheckboxCell';

import { headerCellPropKeys, RendererType } from '../../../constants';

import { getCellStyle, renderElement, stopPropagation, getSortableCellStyle } from '../../../util';
import Filter from '../../Filter';

var HeaderCell = function (_PureComponent) {
  _inherits(HeaderCell, _PureComponent);

  function HeaderCell() {
    var _temp, _this, _ret;

    _classCallCheck(this, HeaderCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleDragHandleRef = function (ref) {
      _this.dragHadle = ref;
    }, _this.handleSort = function () {
      _this.props.onSort(_this.getRequiredProps());
    }, _this.onAutoResizeColumn = function () {
      _this.props.onAutoResizeColumn(_this.props.cellIndex);
    }, _this.getRequiredProps = function () {
      return _pick(_this.props, headerCellPropKeys);
    }, _this.onHeaderDragOver = function (e) {
      stopPropagation(e);
      _this.props.onHeaderDragOver(_this.props.cellIndex);
    }, _this.onHeaderDragStart = function (e) {
      stopPropagation(e);
      _this.props.onHeaderDragStart(_this.props.cellIndex);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HeaderCell.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        style = _props.style,
        renderer = _props.renderer,
        onDragEnd = _props.onDragEnd,
        isSortable = _props.isSortable,
        sortedColumn = _props.sortedColumn,
        dataKey = _props.dataKey,
        isSticky = _props.isSticky,
        isLastSticky = _props.isLastSticky,
        id = _props.id,
        checkedRows = _props.checkedRows,
        onCheck = _props.onCheck,
        isCheckbox = _props.isCheckbox,
        isAllSelected = _props.isAllSelected,
        checkboxRenderer = _props.checkboxRenderer,
        filterRenderer = _props.filterRenderer,
        filterTrigger = _props.filterTrigger,
        filterAlignment = _props.filterAlignment,
        data = _props.data,
        onHeaderDragEnd = _props.onHeaderDragEnd;

    var isSorted = sortedColumn && sortedColumn.dataKey === dataKey;
    var sortDir = sortedColumn ? sortedColumn.dir : '';

    var width = style.width,
        cellStyle = _objectWithoutProperties(style, ['width']);

    return React.createElement(
      'div',
      {
        className: classNames('Sticky-React-Table--Header-Cell-Wrapper', {
          'Sticky-React-Table--is-Sticky--is-Last': isLastSticky,
          'Sticky-React-Table--Header-Cell-Checkbox-Wrapper': isCheckbox
        }),
        style: getCellStyle(cellStyle, isSticky, !isCheckbox),
        draggable: true,
        onDragOver: this.onHeaderDragOver,
        onDragEnter: stopPropagation,
        onDragStart: this.onHeaderDragStart,
        onDragEnd: onHeaderDragEnd
      },
      React.createElement(
        'div',
        {
          className: classNames('Sticky-React-Table--Header-Cell', {
            'Sticky-React-Table--Header-Cell-Checkbox': isCheckbox
          }),
          style: { width: width }
        },
        isCheckbox ? React.createElement(CheckboxCell, {
          id: id,
          renderer: checkboxRenderer,
          checkedRows: checkedRows,
          onCheck: onCheck,
          isChecked: isAllSelected
        }) : React.createElement(
          Fragment,
          null,
          React.createElement(
            'span',
            {
              onClick: this.handleSort,
              style: getSortableCellStyle(isSortable)
            },
            renderElement(renderer, this.getRequiredProps(), title),
            isSortable && isSorted && React.createElement(
              'span',
              { className: 'Sticky-React-Table-Sort-Icon' },
              sortDir === 'ASC' ? React.createElement(
                Fragment,
                null,
                '\u2191'
              ) : React.createElement(
                Fragment,
                null,
                '\u2193'
              )
            )
          ),
          filterRenderer && React.createElement(Filter, {
            data: data,
            dataKey: dataKey,
            filterRenderer: filterRenderer,
            filterTrigger: filterTrigger,
            filterAlignment: filterAlignment
          }),
          React.createElement('div', {
            className: 'Sticky-React-Table-Resize-Handler',
            draggable: true,
            onDragEnd: onDragEnd,
            ref: this.handleDragHandleRef,
            onDoubleClick: this.onAutoResizeColumn
          })
        )
      )
    );
  };

  return HeaderCell;
}(PureComponent);

export { HeaderCell as default };


HeaderCell.defaultProps = {
  isSortable: true
};

HeaderCell.propTypes = process.env.NODE_ENV !== "production" ? {
  title: PropTypes.string,
  style: PropTypes.object.isRequired,
  isSticky: PropTypes.bool,
  isLastSticky: PropTypes.bool,
  renderer: PropTypes.func,
  onDragEnd: PropTypes.func.isRequired,
  onSort: PropTypes.func,
  isSortable: PropTypes.bool,
  sortedColumn: PropTypes.object,
  dataKey: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  checkedRows: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
  isCheckbox: PropTypes.bool.isRequired,
  isAllSelected: PropTypes.bool.isRequired,
  checkboxRenderer: RendererType,
  filterRenderer: RendererType,
  filterTrigger: RendererType,
  filterAlignment: PropTypes.string,
  data: PropTypes.array.isRequired,
  onHeaderDragEnd: PropTypes.func.isRequired,
  onHeaderDragStart: PropTypes.func.isRequired,
  onHeaderDragOver: PropTypes.func.isRequired,
  onAutoResizeColumn: PropTypes.func.isRequired,
  cellIndex: PropTypes.number.isRequired
} : {};

HeaderCell.defaultProps = {
  isCheckbox: false,
  isSortable: true
};