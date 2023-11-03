import { Route, Routes } from 'react-router-dom'
import { Login, Home } from './Pages'
import { AuthProvider } from './AuthContext'

function AiworkSquad() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default AiworkSquad
