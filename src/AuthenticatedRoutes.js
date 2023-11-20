import { Route, Routes, Navigate } from 'react-router-dom'
import { Login, Home, NotFound } from './Pages'
import { AuthProvider } from './AppProvider'
import { Inflow, Navbar, Outflow, RandomNumber, Sidebar } from './Components'

function Covenant() {
  return (
    <>
      <AuthProvider>
        <div>
          <Navbar />
          <div className="w-full flex  py-4  px-3 gap-4 ">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/random-number" element={<RandomNumber />} />
              <Route path="/inflow" element={<Inflow />} />
              <Route path="/outflow" element={<Outflow />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Covenant
