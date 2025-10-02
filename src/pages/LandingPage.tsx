import { useNavigate } from 'react-router-dom'
import { Sparkles, Menu, Gift, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#16213e] to-[#0f3460] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold">Cozy Coder</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-purple-400 transition">Community</a>
          <a href="#" className="hover:text-purple-400 transition">Pricing</a>
          <a href="#" className="hover:text-purple-400 transition">Enterprise</a>
          <a href="#" className="hover:text-purple-400 transition">Learn</a>
          <a href="#" className="hover:text-purple-400 transition">Launched</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-white/10 rounded-lg transition">
            <Gift className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold">
            A
          </div>
          <span className="hidden md:inline">Your Workbench</span>
          <button className="md:hidden p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Introducing Cozy Coder Cloud</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl">
          Build something{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Cozy Coder
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
          Create apps and websites by chatting with AI
        </p>

        {/* Chat Input */}
        <div className="w-full max-w-3xl bg-[#1a1a1a] rounded-2xl p-6 shadow-2xl border border-white/10">
          <textarea
            placeholder="Ask Cozy Coder to create a landing page..."
            className="w-full bg-transparent text-white resize-none outline-none min-h-[100px] placeholder:text-gray-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                navigate('/workbench')
              }
            }}
          />
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                Attach
              </button>
            </div>
            
            <Button
              onClick={() => navigate('/workbench')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full px-6"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Cloud Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute top-40 left-1/3 w-[400px] h-[200px] bg-purple-500/20 rounded-full blur-[100px]" />
          <div className="absolute top-32 right-1/3 w-[350px] h-[180px] bg-blue-600/20 rounded-full blur-[90px]" />
        </div>
      </main>
    </div>
  )
}
