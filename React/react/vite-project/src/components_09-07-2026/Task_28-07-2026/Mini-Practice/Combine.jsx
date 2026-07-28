import React from "react";
import withLoading from "./withLoading";
import UserList from "./UserList";
import PostList from "./PostList";
import useFetch from "./UseFetch";

const UserWithLoading = withLoading(UserList);
const PostWithLoading = withLoading(PostList);

function Combine() {
  const {
    data: users,
    loading: userLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const {
    data: posts,
    loading: postLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <h1>React Fragments,HOC,Custom Hooks</h1>
      <UserWithLoading
        loading={userLoading}
        users={users}
      />
      <hr />
      <PostWithLoading
        loading={postLoading}
        posts={posts}
      />
    </>
  );
}

export default Combine