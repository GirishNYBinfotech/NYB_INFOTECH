import UseApi from "./UseApi";

function Posts() {
  const { data, loading } = UseApi("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <h2>Loading Posts...</h2>;

  return (
    <div>
      <h2>Posts</h2>
      {data.slice(0,5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default Posts;