import { Box } from 'rebass/styled-components';

const Container = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: 1024,
      mx: 'auto',
    }}
  >
    {children}
  </Box>
);

export default Container;
