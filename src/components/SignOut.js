import { Button } from "@mui/material";
import React from "react";
import { auth } from "../lib/firebase";

export const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
    </div>
  );
};
