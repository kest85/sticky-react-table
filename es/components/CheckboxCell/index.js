import _pick from 'lodash/pick';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';


import { cellPropKeys } from '../../constants';

import { renderElement } from '../../util';

var CheckboxCell = function (_Component) {
  _inherits(CheckboxCell, _Component);

  function CheckboxCell() {
    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleCellCheck = function () {
      var _this$props = _this.props,
          onCheck = _this$props.onCheck,
          id = _this$props.id;


      onCheck(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CheckboxCell.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        renderer = _props.renderer,
        isChecked = _props.isChecked;

    var onChange = this.handleCellCheck;

    var checkbox = React.createElement('input', {
      type: 'checkbox',
      id: id,
      checked: isChecked,
      onChange: this.handleCellCheck
    });

    return renderElement(renderer, _extends({}, _pick(this.props, cellPropKeys), { checkbox: checkbox, onChange: onChange, isChecked: isChecked }), checkbox);
  };

  return CheckboxCell;
}(Component);

export { CheckboxCell as default };

CheckboxCell.propTypes = process.env.NODE_ENV !== "production" ? {
  onCheck: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isChecked: PropTypes.bool.isRequired,
  renderer: PropTypes.func
} : {};