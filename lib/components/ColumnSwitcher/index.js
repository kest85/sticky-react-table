'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _memoizeOne = require('memoize-one');

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _ColumnSwitcherItem = require('./ColumnSwitcherItem');

var _ColumnSwitcherItem2 = _interopRequireDefault(_ColumnSwitcherItem);

var _column = require('../../styles/column.styles');

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnSwitcher = function (_Component) {
  _inherits(ColumnSwitcher, _Component);

  function ColumnSwitcher() {
    var _temp, _this, _ret;

    _classCallCheck(this, ColumnSwitcher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      visible: false
    }, _this.toggleDropdownVisibility = function (visible) {
      _this.setState(function () {
        return {
          visible: visible
        };
      });
    }, _this.handleMenuRef = function (ref) {
      _this.menu = ref;
    }, _this.handleIconRef = function (ref) {
      _this.icon = ref;
    }, _this.handleIconClick = function () {
      if (_this.state.visible) {
        _this.toggleDropdownVisibility(false);
      } else {
        _this.toggleDropdownVisibility(true);
      }
    }, _this.handleClose = function (e) {
      if (_this.state.visible) {
        if (e.key === 'Escape' || _this.icon && _this.menu && e.target !== _this.icon && !_this.menu.contains(e.target)) {
          _this.toggleDropdownVisibility(false);
        }
      }
    }, _this.getSwitchableColumns = (0, _memoizeOne2.default)(function (columns) {
      return columns.map(function (column, seq) {
        return _extends({}, column, { seq: seq });
      }).filter(_this.isColumnSwitchable);
    }), _this.isColumnSwitchable = function (column) {
      return !column.isCheckbox && !column.alwaysVisible && column.dataKey && column.title;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ColumnSwitcher.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener('click', this.handleClose, true);
    document.addEventListener('keyup', this.handleClose, true);
  };

  ColumnSwitcher.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.handleClose, true);
    document.removeEventListener('keyup', this.handleClose, true);
  };

  ColumnSwitcher.prototype.render = function render() {
    var _props = this.props,
        onChange = _props.onChange,
        checkboxRenderer = _props.checkboxRenderer,
        columns = _props.columns;

    var switchableColumns = this.getSwitchableColumns(columns);

    return _react2.default.createElement(
      'div',
      {
        className: 'Sticky-React-Table--Header-Column-Switcher',
        style: _column.columnSwitcherStyle
      },
      _react2.default.createElement(
        'div',
        {
          className: 'Sticky-React-Table--Header-Column-Switcher-Icon',
          onClick: this.handleIconClick,
          ref: this.handleIconRef
        },
        ':'
      ),
      this.state.visible && _react2.default.createElement(
        'div',
        {
          className: 'Sticky-React-Table--Header-Column-Switcher-Dropdown',
          ref: this.handleMenuRef
        },
        switchableColumns.map(function (_ref) {
          var title = _ref.title,
              dataKey = _ref.dataKey,
              isChecked = _ref.visible,
              seq = _ref.seq;
          return _react2.default.createElement(_ColumnSwitcherItem2.default, _extends({
            key: dataKey,
            columnIndex: seq
          }, {
            isChecked: isChecked,
            title: title,
            dataKey: dataKey,
            onChange: onChange,
            checkboxRenderer: checkboxRenderer
          }));
        })
      )
    );
  };

  return ColumnSwitcher;
}(_react.Component);

ColumnSwitcher.propTypes = process.env.NODE_ENV !== "production" ? {
  columns: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  checkboxRenderer: _constants.RendererType
} : {};

exports.default = ColumnSwitcher;
module.exports = exports['default'];