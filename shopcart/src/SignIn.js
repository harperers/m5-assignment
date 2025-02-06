import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login:", { name, password });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <p>Please login with one of the following:</p>
      <div>
        <button>Login with Facebook</button>
      </div>
      <div>OR</div>
      <form
        onSubmit={handleLogin}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
        <Link to="/checkout" state={{ username: name }}>
          <button
            type="submit"
            style={{
              marginTop: 20,
              width: "100%",
            }}
          >
            Login
          </button>
        </Link>
      </form>
      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
