import "./Side.css"

export default function Side({content,children}) {
  return (
    <>
      <div className="side"> 
            <h3>{content}</h3>
            {children}
      </div>
    </>
  );
}
