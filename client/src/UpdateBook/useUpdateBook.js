import { useMutation } from 'react-query';

import { updateBook } from '../api';

const useUpdateBook = () => {
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  return { mutateAsync, isMutating };
};

export default useUpdateBook;
