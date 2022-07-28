import { ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type MoviePaginationProps = {
  count: number;
  setPage: (n: number) => void;
};

export default function MoviePagination({
  count,
  setPage,
}: MoviePaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        onChange={(event: ChangeEvent<unknown>, page: number) => setPage(page)}
        renderItem={(item) => {
          return (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          );
        }}
      />
    </Stack>
  );
}
