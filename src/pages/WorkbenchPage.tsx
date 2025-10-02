import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ChatSidebar from '@/components/ChatSidebar'
import ChatInterface from '@/components/ChatInterface'
import FileTree from '@/components/FileTree'
import WorkbenchHeader from '@/components/WorkbenchHeader'

export default function WorkbenchPage() {
  const { chatId } = useParams()
  const navigate = useNavigate()
  const [isFileTreeVisible, setIsFileTreeVisible] = useState(true)

  const handleNewChat = () => {
    navigate('/workbench')
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <WorkbenchHeader />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Chat History Sidebar */}
        <ChatSidebar 
          currentChatId={chatId}
          onNewChat={handleNewChat}
        />

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Chat Interface */}
          <div className="flex-1 flex flex-col">
            <ChatInterface chatId={chatId} />
          </div>

          {/* File Tree Sidebar */}
          {isFileTreeVisible && (
            <FileTree onToggle={() => setIsFileTreeVisible(false)} />
          )}
        </div>
      </div>

      {/* Show Files Button when hidden */}
      {!isFileTreeVisible && (
        <button
          onClick={() => setIsFileTreeVisible(true)}
          className="fixed right-4 bottom-4 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}
