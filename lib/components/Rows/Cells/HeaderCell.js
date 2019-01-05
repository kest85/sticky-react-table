'use strict';

exports.__esModule = true;
exports.default = undefined;

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CheckboxCell = require('../../CheckboxCell');

var _CheckboxCell2 = _interopRequireDefault(_CheckboxCell);

var _constants = require('../../../constants');

var _util = require('../../../util');

var _Filter = require('../../Filter');

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      return (0, _pick3.default)(_this.props, _constants.headerCellPropKeys);
    }, _this.onHeaderDragOver = function (e) {
      (0, _util.stopPropagation)(e);
      _this.props.onHeaderDragOver(_this.props.cellIndex);
    }, _this.onHeaderDragStart = function (e) {
      (0, _util.stopPropagation)(e);
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

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)('Sticky-React-Table--Header-Cell-Wrapper', {
          'Sticky-React-Table--is-Sticky--is-Last': isLastSticky,
          'Sticky-React-Table--Header-Cell-Checkbox-Wrapper': isCheckbox
        }),
        style: (0, _util.getCellStyle)(cellStyle, isSticky, !isCheckbox),
        draggable: true,
        onDragOver: this.onHeaderDragOver,
        onDragEnter: _util.stopPropagation,
        onDragStart: this.onHeaderDragStart,
        onDragEnd: onHeaderDragEnd
      },
      _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('Sticky-React-Table--Header-Cell', {
            'Sticky-React-Table--Header-Cell-Checkbox': isCheckbox
          }),
          style: { width: width }
        },
        isCheckbox ? _react2.default.createElement(_CheckboxCell2.default, {
          id: id,
          renderer: checkboxRenderer,
          checkedRows: checkedRows,
          onCheck: onCheck,
          isChecked: isAllSelected
        }) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'span',
            {
              onClick: this.handleSort,
              style: (0, _util.getSortableCellStyle)(isSortable)
            },
            (0, _util.renderElement)(renderer, this.getRequiredProps(), title),
            isSortable && isSorted && _react2.default.createElement(
              'span',
              { className: 'Sticky-React-Table-Sort-Icon' },
              sortDir === 'ASC' ? _react2.default.createElement(
                _react.Fragment,
                null,
                '\u2191'
              ) : _react2.default.createElement(
                _react.Fragment,
                null,
                '\u2193'
              )
            )
          ),
          filterRenderer && _react2.default.createElement(_Filter2.default, {
            data: data,
            dataKey: dataKey,
            filterRenderer: filterRenderer,
            filterTrigger: filterTrigger,
            filterAlignment: filterAlignment
          }),
          _react2.default.createElement('div', {
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
}(_react.PureComponent);

exports.default = HeaderCell;


HeaderCell.defaultProps = {
  isSortable: true
};

HeaderCell.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes2.default.string,
  style: _propTypes2.default.object.isRequired,
  isSticky: _propTypes2.default.bool,
  isLastSticky: _propTypes2.default.bool,
  renderer: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func.isRequired,
  onSort: _propTypes2.default.func,
  isSortable: _propTypes2.default.bool,
  sortedColumn: _propTypes2.default.object,
  dataKey: _propTypes2.default.string,
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  checkedRows: _propTypes2.default.array.isRequired,
  onCheck: _propTypes2.default.func.isRequired,
  isCheckbox: _propTypes2.default.bool.isRequired,
  isAllSelected: _propTypes2.default.bool.isRequired,
  checkboxRenderer: _constants.RendererType,
  filterRenderer: _constants.RendererType,
  filterTrigger: _constants.RendererType,
  filterAlignment: _propTypes2.default.string,
  data: _propTypes2.default.array.isRequired,
  onHeaderDragEnd: _propTypes2.default.func.isRequired,
  onHeaderDragStart: _propTypes2.default.func.isRequired,
  onHeaderDragOver: _propTypes2.default.func.isRequired,
  onAutoResizeColumn: _propTypes2.default.func.isRequired,
  cellIndex: _propTypes2.default.number.isRequired
} : {};

HeaderCell.defaultProps = {
  isCheckbox: false,
  isSortable: true
};
module.exports = exports['default'];