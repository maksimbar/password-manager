import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import "./Modal.css";
import {
  Headline,
  InputField,
  FormWrapper,
  ShowPassword,
  Heading,
  CloseModal,
} from "./Form.styles";
import Button from "../../components/Button/Button";
import Input from "../Input/Input";
import Modal from "react-modal";
import { Icon } from "../Posts/Post/Post.styles";

Modal.setAppElement("#root");

const Form = ({ currentId, setCurrentId, component }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [postData, setPostData] = useState({
    url: "",
    username: "",
    password: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({ url: "", username: "", password: "" });
  };

  const handleSubmit = async (e) => {
    closeModal();
    e.preventDefault();

    if (!currentId) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
  };

  return (
    <>
      {component === "edit" ? (
        <Icon className="fa-solid fa-id-card fa-xl" onClick={openModal} />
      ) : (
        <Button size={"200px"} content={"Add Item"} onClick={openModal} />
      )}

      <Modal
        className={{
          base: "modal-base",
          afterOpen: "modal-base_after-open",
          beforeClose: "modal-base_before-close",
        }}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-base_after-open",
          beforeClose: "overlay-base_before-close",
        }}
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <FormWrapper onSubmit={handleSubmit}>
          <Heading>
            <Headline>{currentId ? "Edit item" : "Add item"}</Headline>
            <CloseModal
              onClick={closeModal}
              className="fa-solid fa-xmark fa-xl"
            />
          </Heading>
          <InputField>
            <Input
              length={"20"}
              label={"Platform"}
              name={"platform"}
              placeholder="Enter name of a platform (e.g. Netflix)"
              type="text"
              value={postData.url}
              handleChange={(e) =>
                setPostData({ ...postData, url: e.target.value })
              }
            />
          </InputField>
          <InputField>
            <Input
              length={"30"}
              label={"Username"}
              name={"username"}
              placeholder="Enter username/e-mail used during registration"
              type="text"
              value={postData.username}
              handleChange={(e) =>
                setPostData({ ...postData, username: e.target.value })
              }
            />
          </InputField>
          <InputField>
            <Input
              type={"password"}
              label={"Password"}
              name={"password"}
              placeholder="Password goes here"
              value={postData.password}
              handleChange={(e) =>
                setPostData({ ...postData, password: e.target.value })
              }
            />
          </InputField>
          <Button content={currentId ? "Edit item" : "Add item"} />
        </FormWrapper>
      </Modal>
    </>
  );
};

export default Form;
