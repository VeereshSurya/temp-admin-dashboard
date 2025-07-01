export interface ColumnMetadata {
  propertyName: string;
  displayName: string;
  dataType: 'string' | 'number' | 'datetime' | 'boolean';
}