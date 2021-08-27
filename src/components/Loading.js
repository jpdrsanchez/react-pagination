import { Box, keyframes } from '@chakra-ui/react';

const shimmer = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

const Loading = () => {
  return (
    <>
      <Box
        height="68px"
        width="100%"
        mb={4}
        py={4}
        px={6}
        borderRadius="lg"
        boxShadow="sm"
        bgGradient="linear(to-r, gray.300, gray.100, gray.300)"
        bgSize="200%"
        animation={`${shimmer} infinite 2s`}
      />
      <Box
        height="68px"
        width="100%"
        mb={4}
        py={4}
        px={6}
        borderRadius="lg"
        boxShadow="sm"
        bgGradient="linear(to-r, gray.300, gray.100, gray.300)"
        bgSize="200%"
        animation={`${shimmer} infinite 2s`}
      />
      <Box
        height="68px"
        width="100%"
        mb={4}
        py={4}
        px={6}
        borderRadius="lg"
        boxShadow="sm"
        bgGradient="linear(to-r, gray.300, gray.100, gray.300)"
        bgSize="200%"
        animation={`${shimmer} infinite 2s`}
      />
    </>
  );
};

export default Loading;
