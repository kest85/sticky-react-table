import _pick from 'lodash/pick';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';

import classNames from 'classnames';

import CheckboxCell from '../../CheckboxCell';

import { cellPropKeys, RendererType } from '../../../constants';

import { getCellStyle, renderElement } from '../../../util';

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

    return React.createElement(
      'div',
      {
        className: classNames('Sticky-React-Table--Row-Cell-Wrapper', {
          'Sticky-React-Table--is-Sticky--is-Last': isLastSticky,
          'Sticky-React-Table--Row-Cell-Checkbox-Wrapper': isCheckbox
        }),
        style: getCellStyle(cellStyle, isSticky)
      },
      React.createElement(
        'div',
        {
          className: classNames(className, 'Sticky-React-Table--Row-Cell', 'Sticky-React-Table--Row-Cell-' + cellIndex, {
            'Sticky-React-Table--Row-Cell-Checkbox': isCheckbox
          }),
          tabIndex: '0',
          style: { width: width }
        },
        isCheckbox ? React.createElement(CheckboxCell, {
          id: id,
          renderer: checkboxRenderer,
          onCheck: onCheck,
          isChecked: isChecked
        }) : React.createElement(
          Fragment,
          null,
          renderElement(renderer, _pick(this.props, cellPropKeys), cellData),
          React.createElement('div', {
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
}(PureComponent);

export { Cell as default };


Cell.propTypes = process.env.NODE_ENV !== "production" ? {
  dataKey: PropTypes.string,
  cellData: PropTypes.oneOfType([PropTypes.node, PropTypes.bool, PropTypes.func, PropTypes.object]),
  style: PropTypes.object.isRequired,
  isSticky: PropTypes.bool,
  isLastSticky: PropTypes.bool,
  renderer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onDragEnd: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isChecked: PropTypes.bool.isRequired,
  isCheckbox: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  className: PropTypes.string,
  checkboxRenderer: RendererType,
  cellIndex: PropTypes.number.isRequired
} : {};

Cell.defaultProps = {
  isCheckbox: false
};