import { ColumnMetadata } from "./base-column.model";

export interface BaseResponse {
    data: [];
    columns: ColumnMetadata[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    message: string;
    statusCode: number;
    errorCode: string;
  }