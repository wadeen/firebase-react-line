import React, { useState } from 'react'
import { auth, db } from '../lib/firebase'

import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import { v4 as uuidv4 } from 'uuid'

export const SendMessage = ({ scroll }) => {
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

    setDoc(doc(db, 'messages', uuidv4()), docData)
    setMessage('')
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: '78%',
              fontSize: '15px',
              fontWeight: '550',
              marginLeft: '5px',
              marginBottom: '-3px',
            }}
            placeholder="メッセージを入力"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon style={{ color: '#7AC2FF', marginLeft: '20px' }} />
        </div>
      </form>
    </div>
  )
}
