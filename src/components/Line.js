import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { SignOut } from "./SignOut";
import { collection, onSnapshot } from "firebase/firestore";
import { SendMessage } from "./SendMessage";

export const Line = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messageData = collection(db, "messages");
    //   // .orderBy("createdAt")
    //   // .limit(50)
    onSnapshot(messageData, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <SignOut />
      <div className="messages">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div key={id}>
            <div key={id}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
              <p>{uid}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};
