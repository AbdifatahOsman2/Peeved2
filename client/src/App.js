import HashLoader from "react-spinners/HashLoader";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { verifyUser } from "./services";
import Nav from "./Components/Nav";
import Home from "./screens/Home";
import NewPost from "./screens/NewPost";
import Register from "./screens/Register";
import Login from "./screens/Login";
import UserProfile from "./screens/UserProfile.jsx";
import EditPost from "./screens/EditPost";
import PostDetail from "./screens/PostDetail";

// scss/css
import "./Sass/EditPost.scss";
import "./Sass/App.scss";
import "./Sass/Nav.scss";
import "./Sass/Home.scss";
import "./Sass/Post.scss";
import "./Sass/ProfilePost.scss";
import "./Sass/Login.scss"
import "./Sass/Register.scss"
import "./Sass/UserProfile.scss"
import "./Sass/EditPost.scss"
import "./Sass/NewPost.scss"


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [user, setUser] = useState(null);
  // const [post, setPost] = useState(null)

  useEffect(() => {
    verifyUser().then((verifiedUser) => setUser(verifiedUser));
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="load">
          <HashLoader
            id="loading"
            color={"#f50057"}
            loading={loading}
            size={150}
          />
        </div>
      ) : (
        <>
          <Switch>
            {/* components here will have no Navbar */}
            <Route path="/register">
              <Register setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <>
            <Route path="/post/:id" >
            <PostDetail user={user} />
          </Route>
              <Route path="/edit-post/:id">
                <EditPost />
              </Route>
              <Route path="/user-profile">
                <UserProfile user={user} />
              </Route>
              <Nav user={user} setUser={setUser} />
              <Route path="/new-post">
                <NewPost />
              </Route>
              <Route exact path="/">
                <Home user={user} />
              </Route>
            </>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
