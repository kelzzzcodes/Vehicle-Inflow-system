import { Route, Routes } from 'react-router-dom'
import { Login ,Home} from "./Pages"


function AiworkSquad() {
  return <div >

<Routes>
  <Route path='/' element={  <Home/>}/>
  <Route path='/login' element={  <Login/>}/>
</Routes>



  </div>
}

export default AiworkSquad
