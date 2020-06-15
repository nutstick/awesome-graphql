import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import { PaginationFields } from './__generated__/PaginationFields';

interface Props extends PaginationFields {
  page: number;
  pageSize: number;
}

export const Pagination: React.FC<Props> = ({ page, pageSize, totalCount }) => {
  return (
    <AntdPagination
      defaultCurrent={page}
      defaultPageSize={pageSize}
      total={totalCount}
    />
  );
};
