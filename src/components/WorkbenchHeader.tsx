import { Sparkles, Eye, Code, Github, Upload, Zap } from 'lucide-react'
import { Button } from './ui/button'

export default function WorkbenchHeader() {
  return (
    <header className="h-14 border-b border-border bg-card px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold">My Project</span>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Previewing last saved version
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Eye className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Code className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Github className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Zap className="w-4 h-4" />
        </Button>
        <Button variant="default">
          <Upload className="w-4 h-4" />
          Publish
        </Button>
      </div>
    </header>
  )
}
