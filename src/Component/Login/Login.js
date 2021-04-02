import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { Usercontext } from '../../App';
import firebaseConfig from '../../fireConfig';
import { useHistory, useLocation } from 'react-router';


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const Login = () => {
    const [loggedinuser, setloggedinuser]=useContext(Usercontext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googlesignin=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    const {displayName, email}=user;
    const currentUser={name:displayName, email:email}
    console.log(currentUser, token);
    setloggedinuser(currentUser);
    history.replace(from);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential)
  });

    }
    return (
        <div className="login text-center">
        <button className="btn btn-primary justify-content-middle" onClick={googlesignin}>Login With Google</button>
     </div>
    );
};

export default Login;