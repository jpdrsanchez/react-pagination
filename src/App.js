import React, { useState } from 'react';
import {
  Box,
  Center,
  ChakraProvider,
  Container,
  theme,
} from '@chakra-ui/react';
import PostList from './components/PostList';
import PostButton from './components/PostButton';
import PostResults from './components/PostResults';
import Loading from './components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './store/posts';

function App() {
  const { posts } = useSelector(state => state);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getPosts(currentPage));
  }, [dispatch, currentPage]);

  console.log(posts);

  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.50" minH="100vh">
        <Container maxW="container.md" pt={10} pb={10}>
          <PostResults results={posts.data} />
          {posts.data?.map((post, index) => (
            <PostList key={index} posts={post} />
          ))}
          {posts.loading && <Loading />}
          {posts.next ? (
            <PostButton loading={posts.loading} setPage={setCurrentPage} />
          ) : (
            <Center fontSize="2xl">Todos os Posts Carregados</Center>
          )}
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
