import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
import Roodmaps from './pages/Roodmaps.jsx'
import { Provider } from 'react-redux';
// import  store  from './Store/Store.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Provider store={store}>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/roodmaps" element={<Roodmaps />} />
        </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
)
