import React from "react";
import PostListContainer from "../containers/PostContainer";
import { Outlet } from "react-router-dom";

function PostListPage() {
  return (
    <>
      <PostListContainer />
      <Outlet />
    </>
  );
}

export default PostListPage;
