import "./Post.css";

export default function Post({ num, name = "", content }) {
  return (
    <>
      <div className="postApp">

        <h2>{num}</h2>
        <h2>{name}</h2>
        <hr />
        <h3>{content}</h3>
        
      </div>
    </>
  );
}
