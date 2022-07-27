import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type MoviePaginationProps = {
  count: number;
};

export default function MoviePagination({ count }: MoviePaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
        // TODO click takes you to a different page based on the number
        // onClick={}
      />
    </Stack>
  );
}
