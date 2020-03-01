import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import firebase, { auth, signInWithGooglePopUp } from '../firebase/firebase.utils';
import { withRouter, NavLink } from 'react-router-dom';

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {

    e.preventDefault();
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) Auth.setLoggedIn(true);
          history.push('/checkout')
        })
        .catch(e => {
          setErrors(e.message);
        });
      })
  
  };

  const signInWithGoogle = () => {

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => { 
        signInWithGooglePopUp()
        .then(result => {
          console.log(result)
          Auth.setLoggedIn(true)
          history.push('/checkout')
        })
        .catch(e => setErrors(e.message))
      })
   
  }
  return (
    <div>
      <h1>Login</h1>
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
        <hr />
        <button onClick={() => signInWithGoogle()} className="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button>
        <button type="submit">Login</button>
        <span>{error}</span>
        <hr />
        <span>
        No tenés cuenta? <NavLink to="/join">registrate</NavLink>.
        </span>
      </form>
    </div>
  );
};

export default withRouter(Login);