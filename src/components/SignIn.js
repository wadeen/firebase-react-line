import React from "react";
import Button from "@mui/material/Button";
import { auth, provider } from "../lib/firebase.js";
import { signInWithPopup } from "firebase/auth";

function SignIn() {
  function signInWithGoogle() {
    signInWithPopup(auth, provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  );
}

export default SignIn;
