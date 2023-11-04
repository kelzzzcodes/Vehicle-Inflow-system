import { Route, Routes } from 'react-router-dom'
import { Login, Home, NotFound, } from './Pages'
import { AuthProvider } from './AppProvider'

function AiworkSquad() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </AuthProvider>
  )
}

export default AiworkSquad
