import React from 'react';
import {
  PasswordContainer,
  PreviewData,
  IconContainer,
  EmailContainer,
  PlatformName,
  Icon
} from './Post.styles';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';
import Form from '../../Form/Form';
import { copyToClipboard, deleteCredentials } from '../../../helpers/Toasts';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <PasswordContainer>
        <PreviewData>
          <PlatformName>{post.platform}</PlatformName>
          <EmailContainer>{post.username}</EmailContainer>
        </PreviewData>
        <IconContainer>
          <Form setCurrentId={setCurrentId} component={'edit'} currentId={post._id} />
          <Icon onClick={() => copyToClipboard(post.password)} className="fa-solid fa-copy fa-xl" />
          <Icon
            onClick={() => deleteCredentials(post.platform, dispatch(deletePost(post._id)))}
            className="fa-solid fa-eraser fa-xl"
          />
        </IconContainer>
      </PasswordContainer>
    </>
  );
};
export default Post;
