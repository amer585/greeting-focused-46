import { useState } from 'react'
import { ChevronRight, ChevronDown, File, Folder, X } from 'lucide-react'
import { Button } from './ui/button'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ScrollArea } from './ui/scroll-area'

interface FileNode {
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
}

interface FileTreeProps {
  onToggle: () => void
}

export default function FileTree({ onToggle }: FileTreeProps) {
  const [fileStructure] = useState<FileNode[]>([
    {
      name: 'src',
      type: 'folder',
      children: [
        {
          name: 'components',
          type: 'folder',
          children: [
            { name: 'Header.tsx', type: 'file' },
            { name: 'Footer.tsx', type: 'file' },
            {
              name: 'ui',
              type: 'folder',
              children: [
                { name: 'button.tsx', type: 'file' },
                { name: 'input.tsx', type: 'file' },
              ],
            },
          ],
        },
        {
          name: 'pages',
          type: 'folder',
          children: [
            { name: 'Home.tsx', type: 'file' },
            { name: 'About.tsx', type: 'file' },
          ],
        },
        { name: 'App.tsx', type: 'file' },
        { name: 'main.tsx', type: 'file' },
        { name: 'index.css', type: 'file' },
      ],
    },
    {
      name: 'public',
      type: 'folder',
      children: [
        { name: 'vite.svg', type: 'file' },
      ],
    },
    { name: 'package.json', type: 'file' },
    { name: 'tsconfig.json', type: 'file' },
    { name: 'vite.config.ts', type: 'file' },
  ])

  return (
    <div className="w-80 border-l border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-semibold text-sm">Files</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8 hover:bg-accent"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {fileStructure.map((node, index) => (
            <FileTreeNode key={index} node={node} level={0} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

function FileTreeNode({ node, level }: { node: FileNode; level: number }) {
  const [isOpen, setIsOpen] = useState(level === 0)

  if (node.type === 'file') {
    return (
      <button
        className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-accent rounded-md text-sm transition group"
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        <File className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        <span className="truncate">{node.name}</span>
      </button>
    )
  }

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger asChild>
        <button
          className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-accent rounded-md text-sm font-medium transition"
          style={{ paddingLeft: `${level * 12 + 8}px` }}
        >
          {isOpen ? (
            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          )}
          <Folder className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="truncate">{node.name}</span>
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content>
        {node.children?.map((child, index) => (
          <FileTreeNode key={index} node={child} level={level + 1} />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
