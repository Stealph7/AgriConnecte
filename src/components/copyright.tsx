"use client"

export function Copyright() {
  const currentYear = new Date().getFullYear()
  
  return (
    <p className="text-center text-gray-500 text-sm">
      © {currentYear} AgriConnect CI. Tous droits réservés.
    </p>
  )
}
