export const ColumnDisplayName = 'Column';

export const cellPropKeys = [
  'id',
  'rowData',
  'dataKey',
  'cellData',
  'isChecked',
  'isCheckbox',
  'style',
  'title',
  'isAllSelected'
];

export const headerCellPropKeys = [...cellPropKeys, 'isSortable'];

export const rowPropKeys = [
  'id',
  'rowData',
  'rowIndex',
  'columns',
  'isChecked'
];
