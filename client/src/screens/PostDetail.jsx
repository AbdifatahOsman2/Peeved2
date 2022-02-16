import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPostById, newComment } from "../services";

const PostDetail = (props) => {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  // const [userId, setUserId] = useState({});
  const params = useParams();
  const postId = params.id;
  // const userId = props.user.id;
  const history = useHistory();

  useEffect(() => {
    const fetchedPostById = async () => {
      const currentPost = await getPostById(postId);

      if (post) {
        setPost(currentPost);
      }
    };
    fetchedPostById();
  }, [postId]);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const commentInfo = {
        comment,
        postId,
        // userId
      };
      await newComment(commentInfo);
      history.push(`/`);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return (
    <div className="detail">
      <h1>Peeve Comments</h1>
      <article id="details-sections" className="box-shadow">
        <h3 className='comment-detail'>{post?.title}</h3>
        <h4 className='comment-detail'>{post?.content}</h4>
        <h3 className='comment-detail'>Comments:</h3>
        {post?.comments?.map((comment) => (
          <p id="all-comments" className='comment-detail'>{comment.comment}</p>
        ))}
        {props.user ? (
          <>
            <input
              id="post-comment"
              className="box-shadow"
              type="text"
              required
              autoFocus
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="comment here"
            />
            <button id="detail-comment-btn" className="box-shadow" type="submit" onClick={handleOnSubmit}>
              Comment
            </button>
          </>
        ) : (
          <></>
        )}
      </article>
    </div>
  );
};

export default PostDetail;