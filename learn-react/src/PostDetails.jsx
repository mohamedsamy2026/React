import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./conText/ConText";

export default function PostDetails() {
  const posts = useContext(postsContext);
  const { postId } = useParams();

  let postUser = posts.find((p) => {
    return postId == p.id;
  });
  if (postUser) {
    return (
      <>
        <h1>This Is The Post Details Page</h1>
        <div
          style={{
            background: "blue",
            color: "white",
            textAlign: "center",
            padding: "14px",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        >
          <h3>{postUser.title}</h3>
          <p>{postUser.body}</p>
        </div>
      </>
    );
  }
  else{
    return(
        <>
            <h1>The PostId <span style={{color:"red"}}>({postId})</span> Is Not defound</h1>
        </>
    )
  }
}
