import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <>
      {posts?.map(post => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
};

export default PostList;
