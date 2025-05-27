import { NextRequest, NextResponse } from "next/server"
import { User } from "@/models/user"

let users: User[] = []

// Helper to find user by id
function findUser(id: string) {
  return users.find(u => u.id === id)
}

// GET /api/users - list users (admin only)
export async function GET(request: NextRequest) {
  // TODO: Add authentication and role check
  return NextResponse.json(users)
}

// POST /api/users - create user (admin only)
export async function POST(request: NextRequest) {
  const data = await request.json()
  // Validate data here
  const newUser: User = {
    id: crypto.randomUUID(),
    role: data.role,
    email: data.email,
    passwordHash: data.passwordHash,
    name: data.name,
    photoUrl: data.photoUrl,
    culture: data.culture,
    location: data.location,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  users.push(newUser)
  return NextResponse.json(newUser, { status: 201 })
}

// PUT /api/users/:id - update user (admin only)
export async function PUT(request: NextRequest) {
  const url = new URL(request.url)
  const id = url.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  const user = findUser(id)
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

  const data = await request.json()
  Object.assign(user, data, { updatedAt: new Date().toISOString() })

  return NextResponse.json(user)
}

// DELETE /api/users/:id - delete user (admin only)
export async function DELETE(request: NextRequest) {
  const url = new URL(request.url)
  const id = url.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  users = users.filter(u => u.id !== id)
  return NextResponse.json({ message: "User deleted" })
}
