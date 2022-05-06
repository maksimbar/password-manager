import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { PasswordContainer, Container, LoaderContainer, Message } from './Posts.styles';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 1200 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="80" />
    <rect x="0" y="100" rx="5" ry="5" width="100%" height="80" />
    <rect x="0" y="200" rx="5" ry="5" width="100%" height="80" />
  </ContentLoader>
);

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  return isLoading ? (
    <LoaderContainer>
      <MyLoader />
    </LoaderContainer>
  ) : (
    <>
      {!posts.length && !isLoading ? (
        <Message>Nothing here yet, feel free to add some items!</Message>
      ) : (
        <Container>
          {posts.map((post) => (
            <PasswordContainer key={post._id}>
              <Post setCurrentId={setCurrentId} post={post} />
            </PasswordContainer>
          ))}
        </Container>
      )}
    </>
  );
};

export default Posts;
