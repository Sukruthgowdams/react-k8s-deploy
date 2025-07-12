import { Quote } from "lucide-react"

export default function Testimonial({ name, role, quote, imageUrl }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start mb-4">
        <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-purple-200">
          <img src={imageUrl || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>

      <div className="relative">
        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-purple-200 opacity-50" />
        <p className="text-gray-700 italic pl-4">{quote}</p>
      </div>
    </div>
  )
}
