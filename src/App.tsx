import { motion, AnimatePresence } from "motion/react";
import { 
  LucideLinkedin, 
  LucideMail, 
  LucidePhone, 
  LucideMapPin, 
  LucideArrowUpRight, 
  LucideExternalLink, 
  LucideTarget, 
  LucideUsers, 
  LucideBrain, 
  LucideCpu, 
  LucideGlobe,
  LucideTrophy,
  LucideDumbbell
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const SectionHeader = ({ num, title }: { num: string; title: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="font-mono text-neon-green text-sm opacity-80">[{num}]</span>
    <h2 className="text-2xl font-bold uppercase tracking-widest">{title}</h2>
    <div className="flex-1 h-[1px] bg-neon-green opacity-20" />
  </div>
);

const SkillCard = ({ name, icon: Icon }: { name: string; icon: any }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="p-6 neon-border bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-4 group"
  >
    <Icon className="w-10 h-10 text-white group-hover:text-neon-green transition-colors duration-300" />
    <span className="font-mono text-xs uppercase tracking-tighter text-gray-400 group-hover:text-neon-green">{name}</span>
  </motion.div>
);

const BentoBox = ({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) => (
  <div className={`p-6 border border-white/10 relative overflow-hidden group hover:border-neon-green/30 transition-colors duration-500 ${className}`}>
    {title && <h3 className="text-xs font-mono uppercase text-neon-green mb-4 opacity-70 tracking-widest">{title}</h3>}
    {children}
  </div>
);

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black overflow-x-hidden font-sans">
      
      {/* NO NAVBAR FOR THIS THEME - AS PER DESIGN HTML */}
      
      <main className="grid grid-cols-1 lg:grid-cols-[1fr,350px] min-h-screen">
        
        {/* MAIN CONTENT AREA */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="pill mb-6">Digital Strategy & Performance</div>
            
            <h1 className="bold-display">
              Satyam<br />Rai
            </h1>
            <h2 className="bold-display outline-text">
              Marketing
            </h2>
            
            <p className="mono max-w-xl mt-10 opacity-80 uppercase leading-relaxed text-neon-green">
              Satyam Rai is a Digital Marketing Architect specializing in high-conversion campaigns and organic growth engine development. 
              Focusing on analytics-driven scaling and brand dominance at Inspiria Knowledge Campus.
            </p>

            <div className="mt-16 border-t-2 border-neon-green pt-8">
              <SectionHeader num="01" title="Core Methodology" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="stat-box mt-0 border-t-0 border-l border-neon-green/30 pl-4">
                  <div className="mono text-xs opacity-60">STRATEGY</div>
                  <div className="text-xl font-black uppercase mt-1">Social Ads & Meta</div>
                </div>
                <div className="stat-box mt-0 border-t-0 border-l border-neon-green/30 pl-4">
                  <div className="mono text-xs opacity-60">ANALYTICS</div>
                  <div className="text-xl font-black uppercase mt-1">Consumer Psychology</div>
                </div>
                <div className="stat-box mt-0 border-t-0 border-l border-neon-green/30 pl-4">
                  <div className="mono text-xs opacity-60">CREATIVE</div>
                  <div className="text-xl font-black uppercase mt-1">Content Pipeline</div>
                </div>
              </div>
            </div>

            <div className="marquee-v2 mt-20">
              <div className="flex whitespace-nowrap animate-infinite-scroll">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="mx-4">
                    SEO / SEM / GROWTH HACKING / SOCIAL STRATEGY / CONTENT PIPELINE / PAID MEDIA / 
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* SIDEBAR AREA */}
        <div className="sidebar-border p-8 md:p-12 flex flex-col justify-between bg-black/50">
          <div className="space-y-4">
            <div className="mono mb-10 flex flex-col gap-2">
              <a href="#about" className="hover:line-through transition-all">01. SERVICES</a>
              <a href="#work" className="hover:line-through transition-all">02. WORK</a>
              <a href="#contact" className="hover:line-through transition-all">03. CONTACT</a>
            </div>

            <div className="space-y-6">
              <div className="stat-box">
                <div className="mono text-[10px]">AVG. ROI INCREMENT</div>
                <div className="big-num italic">+240%</div>
              </div>
              <div className="stat-box">
                <div className="mono text-[10px]">LIFESTYLE FOCUS</div>
                <div className="big-num italic">CRICKET</div>
                <div className="mono text-[10px] opacity-60 mt-1">Performance Mindset</div>
              </div>
              <div className="stat-box">
                <div className="mono text-[10px]">PHYSICAL DISCIPLINE</div>
                <div className="big-num italic">100%</div>
                <div className="mono text-[10px] opacity-60 mt-1">Strength Training</div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <a 
              href="mailto:satyam.r.1624@inspiria.edu.in"
              className="block bg-neon-green text-black p-6 text-center font-black uppercase text-lg group relative overflow-hidden transition-all active:scale-95"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
            
            <div className="mono mt-10 text-[10px] space-y-2 opacity-50 uppercase tracking-tighter">
              <p>Phone: +91 6206842789</p>
              <p>©2026 Satyam Rai Portfolio</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>

      </main>

      {/* Global CSS for infinite scroll marquee */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
