import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Profile from "./Pages/Profile.jsx";
import Roadmaps from "./Pages/Roadmaps.jsx";
import Roadmapview from "./Pages/Roadmapview.jsx";
import { Provider } from "react-redux";
import TermsAndPrivacy from "./Pages/Terms.jsx";
import store from "./Store/Store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/roadmaps/:id" element={<Roadmapview />} />
            <Route path="/terms" element={<TermsAndPrivacy />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  </StrictMode>
);
export default createRoot;