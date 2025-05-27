import { NextRequest, NextResponse } from "next/server"

interface Order {
  id: string
  buyerId: string
  producerId: string
  productId: string
  quantity: number
  price: number
  status: 'pending' | 'accepted' | 'rejected' | 'completed'
  createdAt: string
  updatedAt: string
}

let orders: Order[] = []

// Helper to find order by id
function findOrder(id: string) {
  return orders.find(o => o.id === id)
}

// GET /api/orders?userId= - list orders for user (buyer or producer)
export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const userId = url.searchParams.get("userId")
  if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 })

  const userOrders = orders.filter(
    o => o.buyerId === userId || o.producerId === userId
  )
  return NextResponse.json(userOrders)
}

// POST /api/orders - create order
export async function POST(request: NextRequest) {
  const data = await request.json()
  const newOrder: Order = {
    id: crypto.randomUUID(),
    buyerId: data.buyerId,
    producerId: data.producerId,
    productId: data.productId,
    quantity: data.quantity,
    price: data.price,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  orders.push(newOrder)
  return NextResponse.json(newOrder, { status: 201 })
}

// PUT /api/orders/:id - update order status
export async function PUT(request: NextRequest) {
  const url = new URL(request.url)
  const id = url.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  const order = findOrder(id)
  if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 })

  const data = await request.json()
  Object.assign(order, data, { updatedAt: new Date().toISOString() })

  return NextResponse.json(order)
}

// DELETE /api/orders/:id - delete order
export async function DELETE(request: NextRequest) {
  const url = new URL(request.url)
  const id = url.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  orders = orders.filter(o => o.id !== id)
  return NextResponse.json({ message: "Order deleted" })
}
