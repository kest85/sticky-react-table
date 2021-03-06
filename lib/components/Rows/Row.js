'use strict';

exports.__esModule = true;
exports.default = undefined;

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Cells = require('./Cells');

var _constants = require('../../constants');

var _util = require('../../util');

var _row = require('../../styles/row.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = (_temp2 = _class = function (_PureComponent) {
  _inherits(Row, _PureComponent);

  function Row() {
    var _temp, _this, _ret;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.renderColumns = function () {
      var _this$props = _this.props,
          columns = _this$props.columns,
          rowData = _this$props.rowData,
          rowIndex = _this$props.rowIndex,
          styleCalculator = _this$props.styleCalculator,
          stickyFunction = _this$props.stickyFunction,
          onDragEnd = _this$props.onDragEnd,
          onCheck = _this$props.onCheck,
          id = _this$props.id,
          isChecked = _this$props.isChecked,
          checkboxRenderer = _this$props.checkboxRenderer,
          infiniteScrollCellRenderer = _this$props.infiniteScrollCellRenderer,
          isLoaderRow = _this$props.isLoaderRow;


      return columns.map(function (column, cellIndex) {
        var width = column.width,
            dataKey = column.dataKey,
            cellRenderer = column.cellRenderer,
            isCheckbox = column.isCheckbox,
            className = column.className;


        var cellData = (0, _get3.default)(rowData, dataKey);
        var style = _extends({ width: width }, styleCalculator(cellIndex));

        var _stickyFunction = stickyFunction(cellIndex),
            isSticky = _stickyFunction.isSticky,
            isLastSticky = _stickyFunction.isLastSticky;

        var renderer = isLoaderRow ? infiniteScrollCellRenderer : cellRenderer;

        return _react2.default.createElement(_Cells.Cell, _extends({
          id: id,
          dataKey: dataKey,
          cellData: cellData,
          rowData: rowData,
          rowIndex: rowIndex,
          style: style,
          isSticky: isSticky,
          isLastSticky: isLastSticky,
          onCheck: onCheck,
          isCheckbox: isCheckbox && !isLoaderRow,
          isChecked: isChecked,
          className: className,
          renderer: renderer,
          cellIndex: cellIndex
        }, {
          onDragEnd: onDragEnd(cellIndex),
          key: 'sitcky-table-row-' + rowIndex + '-' + cellIndex,
          checkboxRenderer: isCheckbox ? checkboxRenderer : null
        }));
      });
    }, _this.getRowClassNames = function () {
      var _this$props2 = _this.props,
          rowClassName = _this$props2.rowClassName,
          rowData = _this$props2.rowData,
          rowIndex = _this$props2.rowIndex;

      if (typeof rowClassName === 'function') {
        return rowClassName(rowData, rowIndex);
      }
      return '';
    }, _this.getRef = function (ref) {
      var _this$props3 = _this.props,
          getRef = _this$props3.getRef,
          rowIndex = _this$props3.rowIndex;


      getRef(ref, rowIndex);
    }, _this.defaultRowRenderer = function () {
      var isChecked = _this.props.isChecked;


      return _react2.default.createElement(
        'div',
        {
          ref: _this.getRef,
          className: (0, _classnames2.default)('Sticky-React-Table--Row', _this.getRowClassNames(), {
            'Sticky-React-Table--Row--is-Checked': isChecked
          }),
          style: _row.rowStyles
        },
        _this.renderColumns()
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Row.prototype.render = function render() {
    var renderer = this.props.renderer;


    if (renderer) {
      var row = (0, _util.renderElement)(renderer, _extends({}, (0, _pick3.default)(this.props, _constants.rowPropKeys), {
        renderColumns: this.renderColumns,
        defaultRowRenderer: this.defaultRowRenderer
      }));

      if (row) {
        return row;
      }
    }

    return this.defaultRowRenderer();
  };

  return Row;
}(_react.PureComponent), _class.defaultProps = {
  isLoaderRow: false
}, _temp2);
exports.default = Row;
Row.propTypes = process.env.NODE_ENV !== "production" ? {
  columns: _propTypes2.default.array.isRequired,
  rowData: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  styleCalculator: _propTypes2.default.func.isRequired,
  stickyFunction: _propTypes2.default.func.isRequired,
  onDragEnd: _propTypes2.default.func.isRequired,
  isChecked: _propTypes2.default.bool.isRequired,
  onCheck: _propTypes2.default.func.isRequired,
  rowClassName: _propTypes2.default.func,
  renderer: _propTypes2.default.func,
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  checkboxRenderer: _constants.RendererType,
  isLoaderRow: _propTypes2.default.bool,
  infiniteScrollCellRenderer: _constants.RendererType,
  getRef: _propTypes2.default.func.isRequired
} : {};
module.exports = exports['default'];