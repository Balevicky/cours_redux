import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/post.action";
import { addUsertLike } from "../actions/user.action";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  // console.log(user);

  const handleLike = () => {
    const PostData = {
      author: post.author,
      title: post.title,
      content: post.ontent,
      likes: post.likes + 1,
      id: post.id,
    };
    const userData = {
      pseudo: user.pseudo,
      likes: user.likes + 1,
      age: user.age,
      id: user.id,
    };
    dispatch(addPostLike(PostData));
    dispatch(addUsertLike(userData));
  };
  return (
    <div>
      <img
        onClick={() => handleLike()}
        src="./icons/clap.png"
        className="clap"
        alt="clap"
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
