import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Profile from "./Pages/Profile.jsx";
import Roadmaps from "./Pages/Roadmaps.jsx";
import Roadmapview from "./Pages/Roadmapview.jsx";
import TermsAndPrivacy from "./Pages/Terms.jsx";
import { Provider } from 'react-redux';
import { store} from './Store/Store.js';
import AdminDashbord from "./Pages/Admin_Dashbord.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import Leaderboard from "./Pages/Leaderboard.jsx"
import ReactGA from "react-ga4";
const Login = lazy(() => import('./Pages/Login.jsx'));
const Roadmap = lazy(() => import('./Pages/Roadmap.jsx'));
ReactGA.initialize("G-R0ZEZ3TV4H");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
        <Suspense fallback={<div className="text-green-500 text-center mt-20">SYSTEM_LOADING...</div>} />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/roadmaps/:id" element={<Roadmapview />} />
            <Route path="/terms" element={<TermsAndPrivacy />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
<Route 
  path="/admin" 
  element={
    <ProtectedRoute isAdmin={true}>
      <AdminDashbord />
    </ProtectedRoute>
  } 
/>          </Routes>
        </BrowserRouter>
    </Provider>
  </StrictMode>
);
export default createRoot;