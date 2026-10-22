import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../Components/NavBar';
import axios from '../api/axios';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('/leaderboard/leaderboard');
        setLeaderboardData(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#0A0A0A] min-h-screen text-white font-sans pt-28 pb-12 flex flex-col items-center px-4">
        <section className="backdrop-filter backdrop-blur-lg bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl shadow-2xl flex flex-col justify-start w-full max-w-2xl gap-5">
          
          <div className="text-center mb-2">
            <h2 className="text-3xl font-extrabold text-[#00FF66] tracking-wider font-mono">CYBER LEADERBOARD</h2>
            <p className="text-xs text-zinc-400 font-mono mt-1">TOP SECURITY OPERATIVES</p>
          </div>

          {loading ? (
            <div className="text-center py-10 text-zinc-400 font-mono animate-pulse">Loading Rankings...</div>
          ) : (
            <>
              <div className="flex flex-row items-center justify-between bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl shadow-lg hover:border-[#00FF66]/50 transition-all">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45" height="45" fill="none" className="flex-shrink-0">
                    <defs>
                      <filter id="green-glow-1" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComponentTransfer in="blur" result="glow1">
                          <feFuncA type="linear" slope="1.5" />
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode in="glow1" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon points="25,5 43,15 43,35 25,45 7,35 7,15" stroke="#00FF66" strokeWidth="1" strokeDasharray="2 2" fill="#00FF66" fillOpacity="0.03" filter="url(#green-glow-1)" />
                    <polygon points="25,8 40,17 40,33 25,42 10,33 10,17" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="3 1" fill="#FFD700" fillOpacity="0.08" />
                    <text x="25" y="29" fill="#FFD700" fontSize="13" fontFamily="Courier New, monospace" textAnchor="middle" fontWeight="bold">[01]</text>
                  </svg>
                  <div>
                    <h4 className="text-white font-bold text-base tracking-wide font-mono">
                      {leaderboardData[0]?.name || 'Unknown Agent'}
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">Rank #1 Security Lead</span>
                  </div>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-zinc-500 block">POINTS</span>
                  <span className="text-[#00FF66] font-bold text-sm">
                    {leaderboardData[0]?.score !== undefined ? `${leaderboardData[0].score} PTS` : '0 PTS'}
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl shadow-lg hover:border-[#00FF66]/50 transition-all">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45" height="45" fill="none" className="flex-shrink-0">
                    <defs>
                      <filter id="green-glow-2" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComponentTransfer in="blur" result="glow2">
                          <feFuncA type="linear" slope="1.5" />
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode in="glow2" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon points="25,5 43,15 43,35 25,45 7,35 7,15" stroke="#00FF66" strokeWidth="1" strokeDasharray="2 2" fill="#00FF66" fillOpacity="0.03" filter="url(#green-glow-2)" />
                    <polygon points="25,8 40,17 40,33 25,42 10,33 10,17" stroke="#C0C0C0" strokeWidth="1.5" strokeDasharray="3 1" fill="#C0C0C0" fillOpacity="0.08" />
                    <text x="25" y="29" fill="#C0C0C0" fontSize="13" fontFamily="Courier New, monospace" textAnchor="middle" fontWeight="bold">[02]</text>
                  </svg>
                  <div>
                    <h4 className="text-white font-bold text-base tracking-wide font-mono">
                      {leaderboardData[1]?.name || 'Unknown Agent'}
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">Rank #2 Security Lead</span>
                  </div>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-zinc-500 block">POINTS</span>
                  <span className="text-[#00FF66] font-bold text-sm">
                    {leaderboardData[1]?.score !== undefined ? `${leaderboardData[1].score} PTS` : '0 PTS'}
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl shadow-lg hover:border-[#00FF66]/50 transition-all">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45" height="45" fill="none" className="flex-shrink-0">
                    <defs>
                      <filter id="green-glow-3" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComponentTransfer in="blur" result="glow3">
                          <feFuncA type="linear" slope="1.5" />
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode in="glow3" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon points="25,5 43,15 43,35 25,45 7,35 7,15" stroke="#00FF66" strokeWidth="1" strokeDasharray="2 2" fill="#00FF66" fillOpacity="0.03" filter="url(#green-glow-3)" />
                    <polygon points="25,8 40,17 40,33 25,42 10,33 10,17" stroke="#CD7F32" strokeWidth="1.5" strokeDasharray="3 1" fill="#CD7F32" fillOpacity="0.08" />
                    <text x="25" y="29" fill="#CD7F32" fontSize="13" fontFamily="Courier New, monospace" textAnchor="middle" fontWeight="bold">[03]</text>
                  </svg>
                  <div>
                    <h4 className="text-white font-bold text-base tracking-wide font-mono">
                      {leaderboardData[2]?.name || 'Unknown Agent'}
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">Rank #3 Security Lead</span>
                  </div>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-zinc-500 block">POINTS</span>
                  <span className="text-[#00FF66] font-bold text-sm">
                    {leaderboardData[2]?.score !== undefined ? `${leaderboardData[2].score} PTS` : '0 PTS'}
                  </span>
                </div>
              </div>
            </>
          )}

        </section>
      </div>
    </>
  );
}

export default Leaderboard;