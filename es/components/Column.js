import PropTypes from 'prop-types';

import { ColumnDisplayName } from '../constants';

var Column = function Column() {
  return null;
};

Column.propTypes = {
  alwaysVisible: PropTypes.bool
};

Column.defaultProps = {
  alwaysVisible: false,
  filterAlignment: 'left'
};

Column.displayName = ColumnDisplayName;

export default Column;