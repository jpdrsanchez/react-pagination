import { Box, Heading } from '@chakra-ui/react';

const PostItem = ({ id, title }) => {
  return (
    <Box
      bg="white"
      py={4}
      px={6}
      borderRadius="lg"
      boxShadow="sm"
      as="article"
      mb={4}
    >
      <Heading isTruncated color="gray.600" fontSize="3xl">
        {id} - {title}
      </Heading>
    </Box>
  );
};

export default PostItem;
