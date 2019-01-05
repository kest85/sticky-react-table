function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RendererType } from '../../constants';

import { renderElement } from '../../util';

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

    var checkbox = React.createElement(
      'label',
      { htmlFor: dataKey },
      React.createElement('input', {
        type: 'checkbox',
        id: dataKey,
        name: 'column',
        onChange: onChange,
        checked: isChecked
      }),
      title
    );

    return React.createElement(
      'div',
      { className: 'Sticky-React-Table--Header-Column-Switcher-Item' },
      renderElement(checkboxRenderer, {
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
}(Component);

export { ColumnSwitcherItem as default };
ColumnSwitcherItem.propTypes = process.env.NODE_ENV !== "production" ? {
  title: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  checkboxRenderer: RendererType
} : {};