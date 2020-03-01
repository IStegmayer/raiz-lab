import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';

const Join = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setErrors] = useState("");

  const handleForm = async event => {
    event.preventDefault();

    if (password !== password2) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, []);

      history.push("/login");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
        <input
          onChange={e => setPassword2(e.target.value)}
          name="password2"
          value={password2}
          type="password"
          placeholder="password2"
        />
        <hr />
        <button type="submit">Registrarse</button>

        <span>{error}</span>
      </form>
    </div>
  );
};

export default withRouter(Join);