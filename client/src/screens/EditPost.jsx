import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPostById, updatePost, getAllPosts, destroyPost } from "../services";
import { TextField, Button } from "@mui/material";

const EditPost = () => {
  const [selectedPost, setSelectedPost] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const params = useParams();
  const postId = params.id;
  const history = useHistory();

  useEffect(() => {
    getPostById(postId).then((fetchedPost) => setSelectedPost(fetchedPost));
    console.log(selectedPost);
  }, [postId]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts();
      const filtered = fetchedPosts.filter((post) => post._id === postId);
      const post = filtered[0];
      setSelectedPost(post);
      setTitle(post.title);
      setContent(post.content);
    };
    fetchPosts();
  }, []);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      setTitle(title);
      setContent(content);

      const updatedPost = {
        title,
        content,
      };

      await updatePost(updatedPost, postId);
      console.log(title, content);
      history.push("/user-profile");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (e) => {
    await destroyPost(postId);
    history.push("/user-profile");
  };

  return (
    <div id="edit-section">
    <form id="edit-form" className="box-shadow" onSubmit={handleOnSubmit}>
    <h3 id="edit-peeve-title">Edit your Peeve!</h3>
        <TextField
          id="edit-title"
          className="box-shadow"
          type="text"
          autofocus
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          id="edit-content"
          className="box-shadow"
          type="text"
          required
          autoFocus
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="all-btns">
        <Button variant="contained" color="success" id="submit-btn" className="box-shadow" type="submit">submit</Button>
        <Button  variant="contained" id="cancel-btn" className="box-shadow" onClick={() => history.push("/user-profile")}>Cancel</Button>
        <Button variant="contained" color="error" id="edit-delete-btn" className="box-shadow" type="submit" onClick={handleDelete}>
          Delete Peeve!
        </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;