export interface QueryParams {
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
}