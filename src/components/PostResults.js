import { Text } from '@chakra-ui/react';

const PostResults = ({ results }) => {
  let totalResults = 0;
  results.forEach(item => {
    totalResults += item.length;
  });

  return (
    <Text mb={4} color="gray.700" fontSize="xl">
      Exibindo: {totalResults} resutados
    </Text>
  );
};

export default PostResults;
