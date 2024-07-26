'use client'

import Heading from '@tiptap/extension-heading'
import Typography from '@tiptap/extension-typography'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Redo,
  Strikethrough,
  Underline as UnderlineIcon,
  Undo,
} from 'lucide-react'
import { Separator } from './ui/separator'
import { Toggle } from './ui/toggle'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'

const Tiptap = ({ val }: { val: string }) => {
  const { setValue } = useFormContext()

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
      }),
      Underline,
      Typography,
      // Placeholder.configure({
      //   placeholder: 'Add a description for the product',
      //   emptyNodeClass:
      //     'first:before:text-muted-foreground first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none',
      // }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class: 'headings',
        },
      }),
    ],
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const content = editor.getHTML()
      setValue('description', content, {
        shouldValidate: true,
        shouldDirty: true,
      })
    },
    editorProps: {
      attributes: {
        class:
          'min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 tiptap-editor',
      },
    },
    content: val,
  })

  useEffect(() => {
    if (editor?.isEmpty) editor.commands.setContent(val)
  }, [val])

  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-col gap-2 ">
      {editor && (
        <div className="flex items-start gap-1 ">
          <Toggle
            variant="outline"
            size="sm"
            aria-label="Toggle bold"
            pressed={editor.isActive('bold')}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle
            variant="outline"
            size="sm"
            aria-label="Toggle italic"
            pressed={editor.isActive('italic')}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle
            variant="outline"
            size="sm"
            aria-label="Toggle underline"
            pressed={editor.isActive('underline')}
            onPressedChange={() =>
              editor.chain().focus().toggleUnderline().run()
            }
          >
            <UnderlineIcon className="h-4 w-4" />
          </Toggle>

          {/* <Separator orientation="vertical" className="h-9 mx-1" />

          <div className="control-group">
            <div className="flex gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                  editor.isActive('heading', { level: 1 }) ? 'px-2.5 h-9' : ''
                }
              >
                H1
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                  editor.isActive('heading', { level: 2 }) ? 'px-2.5 h-9' : ''
                }
              >
                H2
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                  editor.isActive('heading', { level: 3 }) ? 'px-2.5 h-9' : ''
                }
              >
                H3
              </Button>
            </div>
          </div> */}

          <Separator orientation="vertical" className="h-9 mx-1" />

          <Toggle
            variant="outline"
            size="sm"
            aria-label="undo"
            pressed={editor.isActive('undo')}
            onPressedChange={() => editor.chain().focus().undo().run()}
          >
            <Undo className="h-4 w-4" />
          </Toggle>
          <Toggle
            variant="outline"
            size="sm"
            aria-label="redo"
            pressed={editor.isActive('redo')}
            onPressedChange={() => editor.chain().focus().redo().run()}
          >
            <Redo className="h-4 w-4" />
          </Toggle>

          <Separator orientation="vertical" className="h-9 mx-1" />

          <Toggle
            variant="outline"
            size="sm"
            aria-label="ordered list"
            pressed={editor.isActive('orderedList')}
            onPressedChange={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
          >
            <ListOrdered className="h-4 w-4" />
          </Toggle>
          <Toggle
            variant="outline"
            size="sm"
            aria-label="bullet list"
            pressed={editor.isActive('bulletList')}
            onPressedChange={() =>
              editor.chain().focus().toggleBulletList().run()
            }
          >
            <List className="h-4 w-4" />
          </Toggle>
        </div>
      )}
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="flex gap-[2px]">
            <Toggle
              size="sm"
              className="h-7 px-1.5 bg-background/60 backdrop-blur-sm"
              pressed={editor.isActive('bold')}
              onPressedChange={() => editor.chain().focus().toggleBold().run()}
            >
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
              size="sm"
              className="h-7 px-1.5 bg-background/60 backdrop-blur-sm"
              pressed={editor.isActive('italic')}
              onPressedChange={() =>
                editor.chain().focus().toggleItalic().run()
              }
            >
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle
              size="sm"
              className="h-7 px-1.5 bg-background/60 backdrop-blur-sm"
              pressed={editor.isActive('strike')}
              onPressedChange={() =>
                editor.chain().focus().toggleStrike().run()
              }
            >
              <Strikethrough className="h-4 w-4" />
            </Toggle>
            <Toggle
              size="sm"
              className="h-6 px-1.5 bg-background/60 backdrop-blur-sm"
              pressed={editor.isActive('bulletList')}
              onPressedChange={() =>
                editor.chain().focus().toggleBulletList().run()
              }
            >
              <List className="h-4 w-4" />
            </Toggle>
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
