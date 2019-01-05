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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_PureComponent) {
  _inherits(Cell, _PureComponent);

  function Cell() {
    var _temp, _this, _ret;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleDragHandleRef = function (ref) {
      _this.dragHandle = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Cell.prototype.render = function render() {
    var _props = this.props,
        cellData = _props.cellData,
        style = _props.style,
        isSticky = _props.isSticky,
        isLastSticky = _props.isLastSticky,
        renderer = _props.renderer,
        onDragEnd = _props.onDragEnd,
        id = _props.id,
        isChecked = _props.isChecked,
        onCheck = _props.onCheck,
        isCheckbox = _props.isCheckbox,
        className = _props.className,
        checkboxRenderer = _props.checkboxRenderer,
        cellIndex = _props.cellIndex;

    var width = style.width,
        cellStyle = _objectWithoutProperties(style, ['width']);

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)('Sticky-React-Table--Row-Cell-Wrapper', {
          'Sticky-React-Table--is-Sticky--is-Last': isLastSticky,
          'Sticky-React-Table--Row-Cell-Checkbox-Wrapper': isCheckbox
        }),
        style: (0, _util.getCellStyle)(cellStyle, isSticky)
      },
      _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, 'Sticky-React-Table--Row-Cell', 'Sticky-React-Table--Row-Cell-' + cellIndex, {
            'Sticky-React-Table--Row-Cell-Checkbox': isCheckbox
          }),
          tabIndex: '0',
          style: { width: width }
        },
        isCheckbox ? _react2.default.createElement(_CheckboxCell2.default, {
          id: id,
          renderer: checkboxRenderer,
          onCheck: onCheck,
          isChecked: isChecked
        }) : _react2.default.createElement(
          _react.Fragment,
          null,
          (0, _util.renderElement)(renderer, (0, _pick3.default)(this.props, _constants.cellPropKeys), cellData),
          _react2.default.createElement('div', {
            className: 'Sticky-React-Table-Resize-Handler',
            draggable: true,
            onDragEnd: onDragEnd,
            ref: this.handleDragHandleRef
          })
        )
      )
    );
  };

  return Cell;
}(_react.PureComponent);

exports.default = Cell;


Cell.propTypes = process.env.NODE_ENV !== "production" ? {
  dataKey: _propTypes2.default.string,
  cellData: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object]),
  style: _propTypes2.default.object.isRequired,
  isSticky: _propTypes2.default.bool,
  isLastSticky: _propTypes2.default.bool,
  renderer: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
  onDragEnd: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  isChecked: _propTypes2.default.bool.isRequired,
  isCheckbox: _propTypes2.default.bool.isRequired,
  onCheck: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  checkboxRenderer: _constants.RendererType,
  cellIndex: _propTypes2.default.number.isRequired
} : {};

Cell.defaultProps = {
  isCheckbox: false
};
module.exports = exports['default'];