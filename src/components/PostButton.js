import { Button } from '@chakra-ui/react';

const PostButton = ({ setPage, loading }) => {
  return (
    <Button
      size="md"
      px={6}
      py={7}
      width="100%"
      color="white"
      bg="blue.400"
      fontSize="xl"
      onClick={() => setPage(page => page + 1)}
      loadingText="Carregando..."
      isLoading={loading}
    >
      Carregar Mais Posts
    </Button>
  );
};

export default PostButton;
