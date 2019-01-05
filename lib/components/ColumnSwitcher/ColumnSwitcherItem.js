'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../../constants');

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnSwitcherItem = function (_Component) {
  _inherits(ColumnSwitcherItem, _Component);

  function ColumnSwitcherItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, ColumnSwitcherItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleChange = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          dataKey = _this$props.dataKey,
          columnIndex = _this$props.columnIndex;

      onChange(columnIndex, dataKey);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ColumnSwitcherItem.prototype.render = function render() {
    var _props = this.props,
        dataKey = _props.dataKey,
        isChecked = _props.isChecked,
        title = _props.title,
        checkboxRenderer = _props.checkboxRenderer;


    var onChange = this.handleChange;

    var checkbox = _react2.default.createElement(
      'label',
      { htmlFor: dataKey },
      _react2.default.createElement('input', {
        type: 'checkbox',
        id: dataKey,
        name: 'column',
        onChange: onChange,
        checked: isChecked
      }),
      title
    );

    return _react2.default.createElement(
      'div',
      { className: 'Sticky-React-Table--Header-Column-Switcher-Item' },
      (0, _util.renderElement)(checkboxRenderer, {
        checkbox: checkbox,
        id: dataKey,
        dataKey: dataKey,
        onChange: onChange,
        isChecked: isChecked,
        title: title,
        type: 'columnSwitcher'
      }, checkbox)
    );
  };

  return ColumnSwitcherItem;
}(_react.Component);

exports.default = ColumnSwitcherItem;
ColumnSwitcherItem.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes2.default.string.isRequired,
  dataKey: _propTypes2.default.string.isRequired,
  columnIndex: _propTypes2.default.number.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  isChecked: _propTypes2.default.bool.isRequired,
  checkboxRenderer: _constants.RendererType
} : {};
module.exports = exports['default'];