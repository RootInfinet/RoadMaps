import React, { useState, useEffect } from 'react'
import api from "../api/axios";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects')
  const [submittedProjects, setSubmittedProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const [platformStats, setPlatformStats] = useState({
    totalUsers: '---', 
    activeRoadmaps: '4',
    serverStatus: 'Online 🟢',
    securityShield: 'Active'
  })


  useEffect(() => {
    fetchProjectsFromDB()
  }, [])

  const fetchProjectsFromDB = async () => {
    try {
      setLoading(true)
      const response = await api.get("/submit_prject")
      if (!response.ok) throw new Error('Failed to fetch projects')
      const data = await response.json()
      setSubmittedProjects(data)
    } catch (error) {
      console.error("Error fetching data from API:", error)
      setSubmittedProjects([])
    } finally {
      setLoading(false)
    }
  }

  // تحديث حالة المشروع في الـ Database عبر الـ API
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })

      if (!response.ok) throw new Error('Failed to update status')

      setSubmittedProjects(submittedProjects.map(proj => 
        proj.id === id ? { ...proj, status: newStatus } : proj
      ))
    } catch (error) {
      console.error("Failed to update status:", error)
    }
  }

  // حذف المشروع نهائياً من الـ Database عبر الـ API
  const handleDeleteProject = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete project')

      setSubmittedProjects(submittedProjects.filter(proj => proj.id !== id))
    } catch (error) {
      console.error("Failed to delete project:", error)
    }
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans p-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-6 mb-8 max-w-7xl mx-auto">
        <div>
          <h2 className='bg-gradient-to-r from-[#00E676] to-blue-500 bg-clip-text text-transparent font-extrabold text-3xl md:text-4xl'>
            Admin Dashboard - Security & Ops Hub
          </h2>
          <p className='text-gray-400 text-sm mt-1'>Real-time platform monitoring and dynamic student project requests tracking.</p>
        </div>
        
        <div className="flex gap-3 mt-4 md:mt-0">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${activeTab === 'projects' ? 'bg-[#00E676] text-black font-bold shadow-lg shadow-[#00E676]/25' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
          >
            🚀 Student Projects ({submittedProjects.length})
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* 📊 Platform Status Cards (إحصائيات المنصة) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs font-medium">Total Platform Users</p>
              <h4 className="text-2xl font-black text-white mt-1">{platformStats.totalUsers}</h4>
              <span className="text-[10px] text-blue-400">Waiting for API integration</span>
            </div>
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xl">👥</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs font-medium">Active Roadmaps</p>
              <h4 className="text-2xl font-black text-[#00E676] mt-1">{platformStats.activeRoadmaps}</h4>
              <span className="text-[10px] text-gray-400">Secured & Optimized</span>
            </div>
            <div className="p-3 rounded-xl bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/20 text-xl">🗺️</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs font-medium">Server Status</p>
              <h4 className="text-xl font-bold text-green-400 mt-1">{platformStats.serverStatus}</h4>
              <span className="text-[10px] text-gray-400">Low Latency / Secure</span>
            </div>
            <div className="p-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 text-xl">🛡️</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs font-medium">Incoming Requests</p>
              <h4 className="text-2xl font-black text-white mt-1">{submittedProjects.length}</h4>
              <span className="text-[10px] text-yellow-400">Live Database Stream</span>
            </div>
            <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xl">⚡</div>
          </div>

        </div>

        {/* 🚀 Dynamic Projects Section */}
        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className='text-2xl font-bold text-[#00E676]'>Incoming Student Project Requests</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Live API Sync</span>
            </div>

            {loading ? (
              <div className="text-center py-20 text-[#00E676] font-bold text-xl animate-pulse">Fetching live requests from database... 🔄</div>
            ) : submittedProjects.length === 0 ? (
              <p className='text-gray-400 text-center py-20 bg-white/5 rounded-2xl border border-white/10'>No project requests found in the database yet.</p>
            ) : (
              /* Grid System */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {submittedProjects.map((proj) => (
                  <div key={proj.id} className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between gap-4 hover:border-[#00E676]/50 transition-all">
                    
                    {/* Student Info */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start">
                        <span className="font-extrabold text-xl text-white">{proj.name}</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">{proj.roadmap}</span>
                      </div>
                      
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#00E676] text-sm truncate hover:underline bg-black/30 p-2.5 rounded-xl border border-white/5 mt-1"
                      >
                        🔗 {proj.link}
                      </a>
                      <span className="text-xs text-gray-400">Submission Date: {proj.date}</span>
                    </div>

                    {/* Status & Action Buttons */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">Review Status:</span>
                        <span className={`text-xs px-3 py-1 rounded-lg font-medium 
                          ${proj.status === 'Accepted' || proj.status === 'مقبول' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                            proj.status === 'Rejected' || proj.status === 'مرفوض' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                            'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}
                        >
                          {proj.status}
                        </span>
                      </div>

                      <div className="flex gap-2 pt-1">
                        <button 
                          onClick={() => handleStatusChange(proj.id, 'Accepted')} 
                          className="flex-1 py-2 rounded-xl bg-green-500/10 hover:bg-green-500/25 text-green-400 font-bold text-sm transition-all cursor-pointer border border-green-500/20"
                        >
                          Accept ✅
                        </button>
                        <button 
                          onClick={() => handleStatusChange(proj.id, 'Rejected')} 
                          className="flex-1 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/25 text-red-400 font-bold text-sm transition-all cursor-pointer border border-red-500/20"
                        >
                          Reject ❌
                        </button>
                        <button 
                          onClick={() => handleDeleteProject(proj.id)} 
                          className="px-3 py-2 rounded-xl bg-gray-500/10 hover:bg-red-600/25 text-gray-400 hover:text-red-400 text-sm transition-all cursor-pointer border border-white/10"
                          title="Permanent Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}

export default AdminDashboard