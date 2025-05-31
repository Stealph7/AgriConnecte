import { NextRequest, NextResponse } from "next/server"

interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  createdAt: string
  read: boolean
}

let messages: Message[] = []

// Helper to find message by id
function findMessage(id: string) {
  return messages.find(m => m.id === id)
}

// GET /api/messages?userId= - list messages for user (sender or receiver)
export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const userId = url.searchParams.get("userId")
  if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 })

  const userMessages = messages.filter(
    m => m.senderId === userId || m.receiverId === userId
  )
  return NextResponse.json(userMessages)
}

// POST /api/messages - send message
export async function POST(request: NextRequest) {
  const data = await request.json()
  const newMessage: Message = {
    id: crypto.randomUUID(),
    senderId: data.senderId,
    receiverId: data.receiverId,
    content: data.content,
    createdAt: new Date().toISOString(),
    read: false,
  }
  messages.push(newMessage)
  return NextResponse.json(newMessage, { status: 201 })
}

// PUT /api/messages/:id - mark message as read
export async function PUT(request: NextRequest) {
  const url = new URL(request.url)
  const id = url.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  const message = findMessage(id)
  if (!message) return NextResponse.json({ error: "Message not found" }, { status: 404 })

  const data = await request.json()
  if (data.read !== undefined) {
    message.read = data.read
  }

  return NextResponse.json(message)
}

// DELETE /api/messages/:id - delete message
export async function DELETE(request: NextRequest) {
  const url = new URL(request.url)
  const id = url.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  messages = messages.filter(m => m.id !== id)
  return NextResponse.json({ message: "Message deleted" })
}
