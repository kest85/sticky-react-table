import _BarLoader from 'react-spinners/BarLoader';
import React from 'react';


import { defaultInfiniteScrollCellStyle } from '../../../styles/cell.styles';

var DefaultInfiniteScrollCellRenderer = function DefaultInfiniteScrollCellRenderer() {
  return React.createElement(
    'div',
    { style: defaultInfiniteScrollCellStyle },
    React.createElement(_BarLoader, { loading: true, width: 100, widthUnit: '%', color: '#fff', height: 8 })
  );
};

export default DefaultInfiniteScrollCellRenderer;