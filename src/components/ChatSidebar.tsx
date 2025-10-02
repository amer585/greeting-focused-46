import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, MessageSquare, Trash2, ChevronLeft } from 'lucide-react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

interface Chat {
  id: string
  title: string
  timestamp: string
}

interface ChatSidebarProps {
  currentChatId?: string
  onNewChat: () => void
}

export default function ChatSidebar({ currentChatId, onNewChat }: ChatSidebarProps) {
  const navigate = useNavigate()
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  // Mock chat history
  const [chats] = useState<Chat[]>([
    { id: '1', title: 'Landing Page Design', timestamp: '2 hours ago' },
    { id: '2', title: 'API Integration', timestamp: 'Yesterday' },
    { id: '3', title: 'Database Setup', timestamp: '2 days ago' },
    { id: '4', title: 'Authentication Flow', timestamp: '1 week ago' },
  ])

  if (isCollapsed) {
    return (
      <div className="w-14 border-r border-border bg-card flex flex-col items-center py-4 gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(false)}
          className="hover:bg-accent"
        >
          <ChevronLeft className="w-4 h-4 rotate-180" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNewChat}
          className="hover:bg-accent"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="w-64 border-r border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-semibold text-sm">Chat History</h2>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onNewChat}
            className="h-8 w-8 hover:bg-accent"
          >
            <Plus className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(true)}
            className="h-8 w-8 hover:bg-accent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => navigate(`/workbench/${chat.id}`)}
              className={`w-full text-left p-3 rounded-lg hover:bg-accent transition group ${
                currentChatId === chat.id ? 'bg-accent' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                    <span className="text-sm font-medium truncate">{chat.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{chat.timestamp}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    // Delete functionality
                  }}
                  className="opacity-0 group-hover:opacity-100 transition p-1 hover:bg-destructive/10 rounded"
                >
                  <Trash2 className="w-3 h-3 text-destructive" />
                </button>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
