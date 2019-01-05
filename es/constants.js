import PropTypes from 'prop-types';

export var ColumnDisplayName = 'Column';

export var cellPropKeys = ['id', 'rowData', 'dataKey', 'cellData', 'isChecked', 'isCheckbox', 'style', 'title', 'isAllSelected', 'checkboxRenderer'];

export var headerCellPropKeys = [].concat(cellPropKeys, ['isSortable']);

export var rowPropKeys = ['id', 'rowData', 'rowIndex', 'columns', 'isChecked'];

export var RendererType = PropTypes.oneOfType([PropTypes.node, PropTypes.func]);