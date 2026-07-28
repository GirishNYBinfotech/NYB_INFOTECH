import React from "react";

function PostList({ posts }) {
  return (
    <>
      <h2>Posts</h2>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}

export default PostList