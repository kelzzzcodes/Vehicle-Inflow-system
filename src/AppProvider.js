import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setIsLoggedIn(true)
      if (location.pathname === '/login') {
        navigate('/')
      }
    } else {
      setIsLoggedIn(false)
      navigate('/login')
    }
  }, [navigate, location.pathname])

  const login = () => {
    setIsLoggedIn(true)
    navigate('/')
  }

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/login')
  }

  const value = {
    isLoggedIn,
    login,
    logout,
  }

  return (
    <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
  )
}
