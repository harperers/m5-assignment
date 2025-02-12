/* global FB */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [facebookUser, setFacebookUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "615752191178833",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v12.0",
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login:", { name, password });
    navigate("/checkout", { state: { username: name } });
  };

  const responseFacebook = (response) => {
    console.log("Facebook response: ", response);
    if (response.name) {
      setFacebookUser(response);
      setName(response.name);
      navigate("/checkout", { state: { username: response.name } });
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <p>Please login with one of the following:</p>
      <div>
        <FacebookLogin
          appId="615752191178833"
          fields="name,email,picture"
          callback={responseFacebook}
          icon="fa-facebook"
          textButton="Login with Facebook"
          scope="email"
        />
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
        <button
          type="submit"
          style={{
            marginTop: 20,
            width: "100%",
          }}
        >
          Login
        </button>
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
