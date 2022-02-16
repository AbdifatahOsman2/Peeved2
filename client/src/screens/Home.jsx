import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services";
import Post from "../Components/Post";

const Home = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
  }, []);
  return (
    <section className="home">
      <h1 className="page-title" id="top-peeve-title">Check out our Top Pet Peeves!</h1>
      <div className="all-posts">
        {posts.map((post) => (
          <Post key={post._id} post={post} user={user} />
        ))}
      </div>
    </section>
  );
};

export default Home;