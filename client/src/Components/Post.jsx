import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAllComments, newComment } from "../services";

const Post = (props) => {
  const { title, content } = props.post;
  const [comment, setComment] = useState("");
  const [filteredComments, setFilteredComments] = useState([]);
  const params = useParams;
  const postId = params.id;
  const history = useHistory();

  useEffect(() => {
    const fetchedFilteredComments = async () => {
      const fetchedComments = await getAllComments();
      const filtered = fetchedComments.filter(
        (comment) => comment.postId === props.post?.id
      );
      setFilteredComments(filtered);
    };
    fetchedFilteredComments();
  }, [props.post]);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const comment = {
        comment
      };
      await newComment(comment);
      history.push("/user-profile");
    } catch (error) {
      console.error(error.message);
    }
  };
  console.log(props.user)

  return (
    <article id="post-box" className="box-shadow">
      <h1 id="post-title">{title}</h1>
      <h2 id="post-content">{content}</h2>
      {props.user ? (
        <>
          <Link id='home-links' to={`/post/${props.post._id}`}>View comments</Link>
        </>
      ) : (
        <>
          <Link id='home-links' to={"/login"}>Login to view comments</Link>
        </>
      )}
    </article>
  );
};

export default Post;