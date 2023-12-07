import { Route, Routes,} from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './AppProvider'
import AuthLayout from './_auth/AuthLayout'
import Login from './_auth/forms/Login'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import { Inflow, Outflow, RandomNumber } from './_root/pages'
import NotFound from './NotFound'

function Covenant() {
  return (
    <AuthProvider>
      <Routes>
        {/* public Routes  */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
          <Route path="*" element={<NotFound/>} />

        {/* private routes  */}

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />

          <Route path="/random-number" element={<RandomNumber />} />
          <Route path="/inflow" element={<Inflow />} />
          <Route path="/outflow" element={<Outflow />} />

        </Route>
      </Routes>
        <ToastContainer  limit={2}/>
    </AuthProvider>

  )
}

export default Covenant
