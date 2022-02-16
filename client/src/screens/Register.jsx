import { TextField, Button } from "@mui/material";
import { registerUser } from "../services";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        email,
        password,
      };
      const user = await registerUser(userInfo);
      props.setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <section className="register">

      <div className="container">
        <h1>Sign Up</h1>
        <p>A website designed for truckers to share stops and rest areas.</p>
        <TextField
          style={{ margin: "5px" }}
          id="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="username"
          variant="outlined"
        />
        <TextField
          style={{ margin: "5px" }}
          id="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          variant="outlined"
        />
        <TextField
          style={{ margin: "5px" }}
          id="input"
          label="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          style={{ margin: "5px" }}
          id="input"
          label="confirm password"
          variant="outlined"
        />
        <Button
          onClick={handleSubmit}
          style={{ width: "300px", height: "50px", alignSelf: "center" }}
          variant="contained"
          size="Large"
        >
          Sign Up
        </Button>
        <a href="/login">Already a Member?</a>
      </div>
    </section>
  );
}
