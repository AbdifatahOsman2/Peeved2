import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const ProfilePost = (props) => {
    const {title, content} = props.post;

    return (
        <article id="user-post-box" className="box-shadow">
            <h3 id="post-title">{title}</h3>
            <h4 id="post-content">{content}</h4>
            <Link to={`/edit-post/${props.post._id}`}> 
                <Button type="submit" variant="contained">Edit</Button>
            </Link>
    </article>
    );
};

export default ProfilePost;