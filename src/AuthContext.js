import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setIsLoggedIn(true)
      navigate('/')
    } else {
      setIsLoggedIn(false)
      navigate('/login')
    }
  }, [navigate])

  const login = () => {
    setIsLoggedIn(true)
    navigate('/')
  }

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
