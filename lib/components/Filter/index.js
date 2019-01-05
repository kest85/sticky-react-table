'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../../util');

var _filter = require('../../styles/filter.styles');

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

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
        if (e.key === 'Escape' || _this.icon && _this.menu && e.target !== _this.icon && !_this.icon.contains(e.target) && !_this.menu.contains(e.target)) {
          _this.toggleDropdownVisibility(false);
        }
      }
    }, _this.getFilterAlignment = function () {
      var filterAlignment = _this.props.filterAlignment;


      if (filterAlignment !== 'left' && filterAlignment !== 'right') {
        return 'left';
      }

      return filterAlignment;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Filter.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener('click', this.handleClose, true);
    document.addEventListener('keyup', this.handleClose, true);
  };

  Filter.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.handleClose, true);
    document.removeEventListener('keyup', this.handleClose, true);
  };

  Filter.prototype.render = function render() {
    var _props = this.props,
        data = _props.data,
        dataKey = _props.dataKey,
        filterRenderer = _props.filterRenderer,
        filterTrigger = _props.filterTrigger;
    var visible = this.state.visible;

    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'span',
        {
          className: 'Sticky-React-Table--Header-Column-Filter-Icon',
          onClick: this.handleIconClick,
          ref: this.handleIconRef,
          style: _filter.filterIconStyles
        },
        (0, _util.renderElement)(filterTrigger, {}, ':')
      ),
      visible && _react2.default.createElement(
        'div',
        {
          className: 'Sticky-React-Table--Header-Column-Filter-Dropdown',
          ref: this.handleMenuRef,
          style: (0, _filter.filterDropdownStyles)(this.getFilterAlignment())
        },
        (0, _util.renderElement)(filterRenderer, { data: data, dataKey: dataKey }, null)
      )
    );
  };

  return Filter;
}(_react.Component);

exports.default = Filter;


Filter.propTypes = process.env.NODE_ENV !== "production" ? {
  data: _propTypes2.default.array.isRequired,
  dataKey: _propTypes2.default.string.isRequired,
  filterRenderer: _constants.RendererType,
  filterTrigger: _constants.RendererType,
  filterAlignment: _propTypes2.default.string
} : {};
module.exports = exports['default'];