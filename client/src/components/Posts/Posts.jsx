import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { PasswordContainer, Container, LoaderContainer, Message } from './Posts.styles';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={200}
    backgroundColor="transparent"
    {...props}>
    <circle cx="10" cy="86" r="8" />
    <circle cx="54" cy="86" r="8" />
    <circle cx="98" cy="86" r="8" />
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
