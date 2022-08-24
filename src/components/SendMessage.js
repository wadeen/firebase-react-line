import { collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../lib/firebase";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const onChangeMessage = (e) => setMessage(e.target.value);

  const sendMessage = (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    let messageData = collection(db, "messages");

    messageData.add({
      text: message,
      photoURL,
      uid,
      // createdAt: FieldValue.serverTimeStamp(),
      // createdAt: FieldValue.serverTimestamp,
    });
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input type="text" placeholder="メッセージを入力してください" onChange={onChangeMessage} value={message} />
        </div>
      </form>
    </div>
  );
};
