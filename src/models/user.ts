export interface User {
  id: string
  role: 'producer' | 'buyer' | 'admin'
  email: string
  passwordHash: string
  name: string
  photoUrl?: string
  culture?: string
  location?: string
  createdAt: string
  updatedAt: string
}
