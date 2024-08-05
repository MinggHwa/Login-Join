import { Fragment } from 'react/jsx-runtime';
import useStore from '../utills/useStore';
import { Navigate } from 'react-router-dom';

export default function AuthRoutes({children}:{children:React.ReactNode}) {
  
  const isLoggedIn = useStore((status) => status.isLoggedIn);

return isLoggedIn? <Fragment> {children} </Fragment> : <Navigate to='/'/>

}