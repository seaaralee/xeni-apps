import react from 'react';
import Nav from './navigation/navigate';
import {AuthProvider} from './screen/auth/context.auth'

export default function App() {
  return (
    <AuthProvider>
    <Nav/>
    </AuthProvider>
  )
}
