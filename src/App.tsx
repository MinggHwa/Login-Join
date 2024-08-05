import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import MainRoutes from './routes/MainRoutes';







function App() {

  // const isLoggedIn = useStore((state) => state.isLoggedIn);
  


  return (
 <div>

<Router>
    <MainRoutes>

    </MainRoutes>
    </Router>



    </div>

  )
}

export default App
