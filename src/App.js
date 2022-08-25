import './App.css'
import SignIn from './components/SignIn'

import { auth } from './lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Line } from './components/Line'

function App() {
  const [user] = useAuthState(auth) // Firebase auth ログインするとuser = true

  return <div>{user ? <Line /> : <SignIn />}</div>
}

export default App
