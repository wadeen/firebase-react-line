import React, { useEffect, useState, useRef } from 'react'
import { auth, db } from '../lib/firebase'
import { SignOut } from './SignOut'
import { collection, onSnapshot } from 'firebase/firestore'
import { SendMessage } from './SendMessage'

export const Line = () => {
  const scroll = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const messageData = collection(db, 'messages')
    //   // .orderBy("createdAt")
    //   // .limit(50)
    onSnapshot(messageData, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? 'sent' : 'received'
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  )
}
