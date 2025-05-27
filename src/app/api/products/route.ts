import { NextRequest, NextResponse } from "next/server"
import { Product } from "@/models/product"

let products: Product[] = []

// Helper to find product by id
function findProduct(id: string) {
  return products.find(p => p.id === id)
}

// GET /api/products - list products (public)
export async function GET(request: NextRequest) {
  return NextResponse.json(products)
}

// POST /api/products - create product (producer only)
export async function POST(request: NextRequest) {
  const data = await request.json()
  // Validate data here
  const newProduct: Product = {
    id: crypto.randomUUID(),
    producerId: data.producerId,
    name: data.name,
    price: data.price,
    season: data.season,
    quantity: data.quantity,
    region: data.region,
    description: data.description,
    photoUrl: data.photoUrl,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  products.push(newProduct)
  return NextResponse.json(newProduct, { status: 201 })
}

// PUT /api/products/:id - update product (producer only)
export async function PUT(request: NextRequest) {
  const url = new URL(request.url)
  const id = url.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  const product = findProduct(id)
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 })

  const data = await request.json()
  Object.assign(product, data, { updatedAt: new Date().toISOString() })

  return NextResponse.json(product)
}

// DELETE /api/products/:id - delete product (producer only)
export async function DELETE(request: NextRequest) {
  const url = new URL(request.url)
  const id = url.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  products = products.filter(p => p.id !== id)
  return NextResponse.json({ message: "Product deleted" })
}
