import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../Redux/UserSlice";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    oldPassword: "",
    newPassword: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [roadmaps, setRoadmaps] = useState([]);

  const checkAuth = async () => {
    try {
      const response = await api.get("/me");
      if (response.status === 200) {
        dispatch(
          setUser({
            ...response.data.user,
            id: response.data.user.userId || response.data.user.id,
          }),
        );
      }

      const roadmapsRes = await api.get("/my-roadmaps");
      if (roadmapsRes.status === 200) {
        setRoadmaps(roadmapsRes.data.roadmaps || []);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user && user.name) {
      setFormData((prev) => {
        if (prev.name === user.name) return prev;
        return { ...prev, name: user.name };
      });
    }
  }, [user]);

  const handleUpdate = async () => {
    try {
      const res = await api.put("/update", formData, { withCredentials: true });
      dispatch(setUser(res.data.user));
      setIsEditing(false);
      alert("Update successful");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update");
    }
  };

  const handleLogout = async () => {
    await api.post("/logout", {}, { withCredentials: true });
    dispatch(setUser(null));
    navigate("/login");
  };

  if (!user)
    return (
      <div className="bg-[#0A0A0A] min-h-screen text-white flex items-center justify-center font-mono text-sm sm:text-base px-4">
        <span className="text-[#00FF66] animate-pulse">
          &gt; LOADING_SECURE_PROFILE...
        </span>
      </div>
    );

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-mono flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f10_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f10_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

      <Navbar />

      <main className="flex-grow flex flex-col justify-start items-center pt-24 sm:pt-28 px-3 sm:px-4 pb-12 gap-6 relative z-10">
        <div className="w-full max-w-4xl bg-zinc-900/60 backdrop-blur-xl p-6 sm:p-8 border border-zinc-800 rounded-2xl shadow-[0_0_30px_rgba(0,255,102,0.05)] hover:border-[#00FF66]/30 transition-all">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 border-b border-zinc-800/80 pb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF66] to-emerald-600 rounded-full blur opacity-30"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-zinc-950 border-2 border-[#00FF66] flex items-center justify-center text-3xl sm:text-4xl font-extrabold text-[#00FF66] shadow-inner">
                  {user?.name ? user.name[0].toUpperCase() : "U"}
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  {isEditing ? (
                    <input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-zinc-950 border border-[#00FF66] px-3 py-1.5 rounded text-xl sm:text-2xl font-bold outline-none w-full text-white"
                    />
                  ) : (
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
                      {user.name}
                    </h1>
                  )}
                  <span className="self-center sm:self-auto bg-[#00FF66]/10 text-[#00FF66] text-xs px-2.5 py-1 rounded-full border border-[#00FF66]/20 font-semibold uppercase tracking-wider">
                    Operative Active
                  </span>
                </div>
                <p className="text-zinc-400 text-sm">{user.email}</p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto bg-zinc-950/80 border border-zinc-800/80 px-5 py-3 rounded-xl gap-2">
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase tracking-widest text-center sm:text-right">
                  Security Score
                </span>
                <span className="text-[#00FF66] font-extrabold text-lg sm:text-xl tracking-wider">
                  {user.score !== undefined ? `${user.score} PTS` : "0 PTS"}
                </span>
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="py-6 space-y-4 border-b border-zinc-800/80 animate-fadeIn">
              <p className="text-xs text-[#00FF66] uppercase tracking-widest font-bold">
                &gt; SECURITY CREDENTIALS UPDATE
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Old Password"
                  onChange={(e) =>
                    setFormData({ ...formData, oldPassword: e.target.value })
                  }
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded outline-none focus:border-[#00FF66] text-sm text-white transition-colors"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  onChange={(e) =>
                    setFormData({ ...formData, newPassword: e.target.value })
                  }
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded outline-none focus:border-[#00FF66] text-sm text-white transition-colors"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {isEditing ? (
              <button
                onClick={handleUpdate}
                className="w-full sm:w-auto bg-[#00FF66] text-zinc-950 hover:bg-[#00cc52] px-8 py-2.5 rounded font-extrabold transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)] text-sm"
              >
                SAVE CHANGES
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-2.5 rounded font-bold transition-all border border-zinc-700 text-sm"
              >
                EDIT PROFILE
              </button>
            )}
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto text-red-400 border border-red-500/30 bg-red-500/10 px-8 py-2.5 rounded font-bold hover:bg-red-500 hover:text-white transition-all text-sm"
            >
              LOGOUT
            </button>
          </div>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-xl p-6 sm:p-8 border border-zinc-800 rounded-2xl w-full max-w-4xl shadow-xl">
          <div className="flex justify-between items-center mb-6 border-b border-zinc-800/80 pb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#00FF66] tracking-wide">
              // ACTIVE ROADMAPS
            </h2>
            <span className="text-xs text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
              Total: {roadmaps.length}
            </span>
          </div>

          {roadmaps.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roadmaps.map((rm) => (
                <div
                  key={rm._id || rm.id}
                  className="p-5 bg-zinc-950/80 rounded-xl border border-zinc-800 hover:border-[#00FF66] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-700 group-hover:bg-[#00FF66] transition-colors"></div>

                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#00FF66] transition-colors">
                    {rm.title || "Frontend Development"}
                  </h3>

                  {rm.subtitle && (
                    <span className="text-zinc-400 text-xs block mt-1">
                      {rm.subtitle}
                    </span>
                  )}

                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-zinc-900 text-xs">
                    <span className="text-zinc-400">
                      Status:{" "}
                      <span className="text-[#00FF66] font-bold">
                        {rm.status || "Active"}
                      </span>
                    </span>
                    {rm.steps && (
                      <span className="text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        {rm.steps}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-zinc-950/40 rounded-xl border border-dashed border-zinc-800">
              <p className="text-zinc-500 text-sm">
                You haven't enrolled in any roadmaps yet.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Profile;
