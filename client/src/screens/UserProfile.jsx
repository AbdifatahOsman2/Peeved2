import { useEffect, useState } from "react";
import { getAllPosts } from "../services";
import ProfilePost from "../Components/ProfilePost";

export default function UserProfile(props) {
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
      const fetchedFilteredPosts = async () => {
        const fetchedPosts = await getAllPosts();
        const filter = fetchedPosts.filter(
          (post) => post.userId === props.user?.id
        );
        setFilteredPosts(filter);
      };
      fetchedFilteredPosts();
      
    }, [props.user]);
  console.log(filteredPosts)
  return (
    <section className="user-profile-body">
    <h1 className="page-title" id="my-peeves-h3">My Pet Peeves!</h1>
    <div className="filtered-posts">
      {filteredPosts.map((post) => (
        <ProfilePost key={post._id} post={post} />
      ))}
    </div>
  </section>
  )
}
