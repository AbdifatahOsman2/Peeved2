import { useState } from "react";
import { useHistory } from "react-router-dom";
import { newPost } from "../services";
import { TextField, Button } from "@mui/material";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const post = {
        title,
        content,
      };
      await newPost(post);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="post-stop">
      <h3 id="add-peeve-text">Add a Peeve!</h3>
      <TextField
        style={{
          width: "500px",
          ["@media (max-width:480px)"]: {
            width: "38px",
          },
        }}
        id="new-title"
        required
        autoFocus
        placeholder="Enter peeve title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        style={{
          width: "500px",
        }}
        id="new-title"
        required
        autoFocus
        placeholder="Tell us what peeves you off..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained">
        Post
      </Button>
    </section>
  );
};

export default NewPost;
