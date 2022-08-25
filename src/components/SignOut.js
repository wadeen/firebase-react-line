import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../lib/firebase'
import CallIcon from '@mui/icons-material/Call'

export const SignOut = () => {
  return (
    <div className="header">
      <Button
        onClick={() => auth.signOut()}
        style={{ color: 'white', fontSize: '15px' }}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  )
}
