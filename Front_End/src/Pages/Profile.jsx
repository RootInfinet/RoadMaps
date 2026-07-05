import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Redux/UserSlice';
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/NavBar';
import { frontEndRoadmap } from '../data/frontEndRoadmap';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({ name: '', oldPassword: '', newPassword: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [roadmaps, setRoadmaps] = useState([]);

  const checkAuth = async () => {
    try {
      const response = await api.get("/me", { withCredentials: true });
      if (response.status === 200) {
        dispatch(setUser(response.data.user));
      }

      const roadmapsRes = await api.get("/my-roadmaps", { withCredentials: true });
      if (roadmapsRes.status === 200) {
        setRoadmaps(roadmapsRes.data.roadmaps || []); 
      }
    } catch (error) {
console.error(error);
alert("Internal Server Error")
};

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) setFormData(prev => ({ ...prev, name: user.name }));
  }, [user]);

  const handleUpdate = async () => {
    try {
      const res = await api.put("/update", formData, { withCredentials: true });
      dispatch(setUser(res.data.user));
      setIsEditing(false);
      alert("Update successful");
    } catch (err) { alert(err.response?.data?.message || "Failed to update"); }
  };

  const handleLogout = async () => {
    await api.post("/logout", {}, { withCredentials: true });
    dispatch(setUser(null));
    navigate("/login");
  };

  if (!user) return (
    <div className='bg-[#0A0A0A] min-h-screen text-white flex items-center justify-center text-sm sm:text-base px-4'>
      Loading...
    </div>
  );

  return (
    <div className='bg-[#0A0A0A] min-h-screen text-white font-sans flex flex-col'>
      <Navbar />

      <main className="flex-grow flex flex-col justify-start items-center pt-20 sm:pt-24 px-3 sm:px-4 pb-8 sm:pb-10 gap-4 sm:gap-5">
        {/* Profile Card */}
        <div className="w-full max-w-4xl bg-[#111] p-4 sm:p-6 md:p-8 border border-gray-800 rounded-2xl shadow-2xl">
          
          {/* Avatar + Name Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-b border-gray-800 pb-6 sm:pb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-green-500 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold shadow-lg shrink-0">
              {user.name[0].toUpperCase()}
            </div>
            <div className="flex-1 text-center sm:text-left">
              {isEditing ? (
                <input 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="bg-transparent border-b-2 border-green-500 text-xl sm:text-2xl md:text-3xl outline-none w-full text-white text-center sm:text-left" 
                />
              ) : (
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{user.name}</h1>
              )}
              <p className="text-gray-400 text-sm sm:text-base mt-1">{user.email}</p>
            </div>
          </div>

          {/* Edit Password Fields */}
          {isEditing && (
            <div className="py-4 sm:py-6 space-y-3 sm:space-y-4">
              <input 
                type="password" 
                placeholder="Old Password" 
                onChange={(e) => setFormData({...formData, oldPassword: e.target.value})} 
                className="w-full bg-[#1a1a1a] border border-gray-700 p-2.5 sm:p-3 rounded outline-none focus:border-green-500 text-sm sm:text-base" 
              />
              <input 
                type="password" 
                placeholder="New Password" 
                onChange={(e) => setFormData({...formData, newPassword: e.target.value})} 
                className="w-full bg-[#1a1a1a] border border-gray-700 p-2.5 sm:p-3 rounded outline-none focus:border-green-500 text-sm sm:text-base" 
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
            {isEditing ? (
              <button 
                onClick={handleUpdate} 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-2.5 sm:py-2 rounded font-bold transition text-sm sm:text-base"
              >
                Save Changes
              </button>
            ) : (
              <button 
                onClick={() => setIsEditing(true)} 
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 px-6 sm:px-8 py-2.5 sm:py-2 rounded font-bold transition text-sm sm:text-base"
              >
                Edit Profile
              </button>
            )}
            <button 
              onClick={handleLogout} 
              className="w-full sm:w-auto text-red-500 border border-red-500 px-6 sm:px-8 py-2.5 sm:py-2 rounded font-bold hover:bg-red-500 hover:text-white transition text-sm sm:text-base"
            >
              Logout
            </button>
          </div>
        </div>

        {/* My Roadmaps Section */}
        <div className="bg-[#111] p-4 sm:p-6 md:p-8 border border-gray-800 rounded-2xl w-full max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-500">My Roadmaps</h2>
          
          {roadmaps.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {roadmaps.map((rm) => {
                const fullInfo = frontEndRoadmap.find(item => item.id === rm.roadmapId);

                return (
                  <div 
                    key={rm.id} 
                    className="p-4 sm:p-5 bg-[#141414] rounded-2xl border border-zinc-800 hover:border-[#39FF14] transition-all duration-300"
                  >
                    <h3 className="font-extrabold text-base sm:text-lg text-white tracking-wide">
                      {fullInfo ? fullInfo.title : "Frontend Development"} 
                    </h3>
                    
                    {fullInfo && (
                      <span className="text-[#39FF14] text-xs block mt-1 font-medium">
                        {fullInfo.subtitle}
                      </span>
                    )}

                    <div className="flex justify-between items-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-zinc-900 text-xs text-gray-400">
                      <span>
                        Status: <span className="text-[#39FF14] font-mono">{rm.status}</span>
                      </span>
                      {fullInfo && (
                        <span className="text-gray-500 font-mono">{fullInfo.steps}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-400 text-sm sm:text-base">You haven't enrolled in any roadmaps yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Profile;
