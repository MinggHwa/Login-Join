import { Route, Routes } from 'react-router-dom'
import { Welcome } from '../pages/Welcome'
import { UnWelcome } from '../pages/UnWelcome'
import DefaultRoutes from './DefaultRoutes'
import AuthRoutes from './AuthRoutes'


export default function MainRoutes() {
  return (
    <Routes>
         <Route path="/welcome" element= {
        
          
          <AuthRoutes>
<Welcome />

          </AuthRoutes>
          } /> 
      <Route path="/" element={
        <DefaultRoutes>
          <UnWelcome />

        </DefaultRoutes>
        } />



    </Routes>
   


  )




}