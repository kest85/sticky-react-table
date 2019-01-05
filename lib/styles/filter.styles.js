'use strict';

exports.__esModule = true;
var filtersStyles = exports.filtersStyles = {
  position: 'relative'
};

var filterDropdownStyles = exports.filterDropdownStyles = function filterDropdownStyles(horizontalAlignment) {
  var _ref;

  return _ref = {
    position: 'absolute',
    maxHeight: '300px',
    overflow: 'hidden',
    top: '100%'
  }, _ref[horizontalAlignment] = 0, _ref;
};

var filterIconStyles = exports.filterIconStyles = {
  padding: '0 5px',
  marginLeft: '5px'
};