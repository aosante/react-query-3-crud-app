import { Box, Heading, Flex } from 'rebass/styled-components';
import { useParams, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { Container } from '../layout';
import BookForm from '../Forms';
import useFetchBook from './useFetchBook';
import useUpdateBook from './useUpdateBook';

const UpdateBook = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, error, isLoading, isError } = useFetchBook(id);
  const { mutateAsync, isLoading: isMutating } = useUpdateBook();

  const onFormSubmit = async (formData) => {
    await mutateAsync({ ...formData, id });
    history.push('/');
  };

  if (isLoading) {
    return (
      <Container>
        <Flex data-testid="loader" py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#cccccc" height={30} />;
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          Error: {error.message}
        </Flex>
      </Container>
    );
  }

  return (
    <Container>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      </Box>
    </Container>
  );
};

export default UpdateBook;
