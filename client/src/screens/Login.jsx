import { TextField, Button } from "@mui/material";
import { loginUser } from "../services";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        password,
      };
      const user = await loginUser(userInfo);
      props.setUser(user);
      history.push("/user-profile");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <section className="login">
      <div className="login-container">
        <h1>Sign in</h1>
        <p>Log back in and share stops and rest areas.</p>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="username"
          variant="outlined"
        />
        <TextField
          label="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handelSubmit}
          style={{ width: "300px", height: "50px", alignSelf: "center" }}
          variant="contained"
          size="Large"
        >
          Sign in
        </Button>
        <a href="/register">Not a Member?</a>
      </div>
    </section>
  );
}
