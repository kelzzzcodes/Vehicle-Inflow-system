import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
// import { Login, Home, NotFound } from './Pages'
import { AuthProvider } from './AppProvider'
// import { Inflow, Navbar, Outflow, RandomNumber, Sidebar } from './Components'
import AuthLayout from './_auth/AuthLayout'
import Login from './_auth/forms/Login'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import { Inflow, Outflow, RandomNumber } from './_root/pages'
import NotFound from './NotFound'

// function Dashboard() {
//   return (
//     <div>
//        <Navbar />
//         <div className="w-full flex  py-4  px-2 gap-4 ">
//         <Sidebar />

//         <Outlet/>
//     </div>
//     </div>
//   );
// };

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
    </AuthProvider>
    // <>
    // <AuthProvider>
    // <Routes>
    //   <Route path="/" element={<Dashboard />}>
    //  <Route path="/" element={<Home />} />

    //  <Route path="/random-number" element={<RandomNumber />} />
    //     <Route path="/inflow" element={<Inflow />} />
    //      <Route path="/outflow" element={<Outflow />} />
    //       <Route path="*" element={<Navigate to="/" replace />} />
    //   </Route>
    //    <Route path="/login" element={<Login />} />
    //     <Route path="*" element={<NotFound />} />
    // </Routes>
    //   </AuthProvider>

    // </>
  )
}

export default Covenant
