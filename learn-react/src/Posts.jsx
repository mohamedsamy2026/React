import { Link } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./conText/ConText";

export default function posts() {
  const postsAll = useContext(postsContext);
  let postsList = postsAll.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <div
          style={{
            background: "orange",
            width: "100ch",
            margin: "auto",
            padding: "15px",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        >
          <h3>{post.title}</h3>
        </div>
      </Link>
    );
  });
  return (
    <>
      <h1>This Is The Home Post</h1>
      <div
        style={{
          width: "100ch",
          margin: "auto",
          textAlign: "center",
          padding: "15px",
          borderRadius: "7px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexDirection: "column",
        }}
      >
        {postsList}
        <Link to="/posts/newPost">
          <button>New Post</button>
        </Link>
        <Link to="/posts/DeletePost">
          <button>Delete Post</button>
        </Link>
      </div>
    </>
  );
}
