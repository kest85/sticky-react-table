'use strict';

exports.__esModule = true;
var defaultCellStyle = exports.defaultCellStyle = {
  zIndex: 0,
  background: 'inherit',
  display: 'inline-flex',
  outline: 0
};

var stickyCellStyle = exports.stickyCellStyle = {
  position: 'sticky',
  zIndex: 1
};

var defaultInfiniteScrollCellStyle = exports.defaultInfiniteScrollCellStyle = {
  width: '100%',
  padding: '7px 0',
  opacity: 0.25
};

var reorderableHeaderCellStyle = exports.reorderableHeaderCellStyle = {
  cursor: 'move'
};

var sortableHeaderCellStyle = exports.sortableHeaderCellStyle = {
  cursor: 'pointer'
};