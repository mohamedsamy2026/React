import "./App.css";
import Home from "./Home";
import Posts from "./Posts";
import About from "./About";
// Import React Router
import { Route, Routes, Link } from "react-router-dom";
import PostDetails from "./PostDetails";
import NotFound from "./NotFound";
import DeletePost from "./DeletPost";
import NewPost from "./NewPost";
import FatherPost from "./FatherPosts";
import FontAsome from "./FontAsome"
// Context
import { postsContext } from "./conText/ConText";

import Materail from "./Material";
// import Grid from "./Grid";

//  Themes
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";

import DeleteIcon from "@mui/icons-material/Delete";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: "#01579b",
    },
  },
});

function App() {
  // let postsAll = [
  //   {
  //     id: 1,
  //     title: "The Post 1",
  //     body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellatea.",
  //   },
  //   {
  //     id: 2,
  //     title: "The Post 2",
  //     body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellatea.",
  //   },
  //   {
  //     id: 3,
  //     title: "The Post 3",
  //     body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellatea.",
  //   },
  // ];

  return (
    // <postsContext.Provider value={postsAll}>
    //   <>
    //     <h1>Hello</h1>
    //     <ul style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    //       <Link to="/home">
    //         <button style={{ fontSize: "25px" }}>Home</button>
    //       </Link>

    //       <Link to="/about">
    //         <button style={{ fontSize: "25px" }}>About</button>
    //       </Link>
    //       <Link to="/posts">
    //         <button style={{ fontSize: "25px" }}>Posts</button>
    //       </Link>

    //       <Link to="/posts/NewPost">
    //         <button style={{ fontSize: "25px" }}>New Post</button>
    //       </Link>

    //       <Link to="/posts/DeletePost">
    //         <button style={{ fontSize: "25px" }}>Delet Post</button>
    //       </Link>
    //     </ul>

    //     <Routes>
    //       <Route path="/posts" element={<FatherPost/>}>
    //         <Route index element={<Posts />} />
    //         <Route path=":postId" element={<PostDetails />} />
    //         <Route path="DeletePost" element={<DeletePost />} />
    //         <Route path="NewPost" element={<NewPost />} />
    //       </Route>

    //       <Route path="/home" element={<Home />} />
    //       <Route path="*" element={<NotFound />} />
    //       <Route path="/About" element={<About />} />
    //     </Routes>

    //     {/* <PropsDefult /> */}

    //     {/* <ul>{taskList}</ul> */}

    //     {/* <UseState/> */}

    //     {/* <UseStateArray/> */}
    //   </>
    // </postsContext.Provider>

    <>
      {/* <ThemeProvider theme={theme}>
        <Materail />
      </ThemeProvider> */}

      {/* <Grid /> */}
      <div className="w-12 h-12 bg-red-200 hover:bg-red-300 rounded-full flex items-center justify-center cursor-pointer duration-200 mx-auto mt-100">
        <DeleteIcon style={{ fontSize: "30px" }} className="text-red-500" />
      </div>
      <FontAsome/>
    </>
  );
}

export default App;
