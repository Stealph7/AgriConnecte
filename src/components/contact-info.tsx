"use client"

export function ContactInfo() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
      <ul className="space-y-2">
        <li className="text-gray-600">
          <span className="font-medium">Téléphone:</span> +225 00 00 00 00
        </li>
        <li className="text-gray-600">
          <span className="font-medium">Email:</span>{" "}
          contact@agriconnect.ci
        </li>
        <li className="text-gray-600">
          <span className="font-medium">Adresse:</span>{" "}
          Abidjan, Côte d'Ivoire
        </li>
      </ul>
    </div>
  )
}
