import React, { useState } from 'react'
import { auth, db } from '../lib/firebase'

import { doc, setDoc, Timestamp } from 'firebase/firestore'

export const SendMessage = () => {
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser // Googleアカウントの画像取り出し

    const docData = {
      text: message,
      photoURL,
      uid,
      createdAt: Timestamp.now(),
    }

    setDoc(doc(db, 'messages', uid), docData)
    setMessage('')
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            type="text"
            placeholder="メッセージを入力してください"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </form>
    </div>
  )
}
