import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { PasswordContainer, Container } from './Posts.styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <Container>
      {posts.map(
        (post) =>
          (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <PasswordContainer key={post._id}>
              <Post setCurrentId={setCurrentId} post={post} />
            </PasswordContainer>
          )
      )}
    </Container>
  );
};

export default Posts;
