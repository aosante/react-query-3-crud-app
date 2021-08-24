import { useQuery } from 'react-query';

import { getBook } from '../api';

const useFetchBook = (id) => {
  const { data, error, isLoading, isError } = useQuery(
    ['book', { id }],
    getBook
  );

  return { data, error, isLoading, isError };
};

export default useFetchBook;
