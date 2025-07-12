import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export default function FeaturedEvent({ title, date, location, description, imageUrl, category }) {
  const categoryColors = {
    Cultural: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    Technical: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Sports: "bg-green-100 text-green-800 hover:bg-green-200",
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover opacity-30" />
      </div>
      <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center">
          <Badge className={`w-fit mb-4 ${categoryColors[category]}`}>{category}</Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>

          <div className="flex flex-col space-y-3 mb-6">
            <div className="flex items-center text-gray-300">
              <Calendar className="h-5 w-5 mr-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-5 w-5 mr-3" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="h-5 w-5 mr-3" />
              <span>500+ participants expected</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 border-0"
            >
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-gray-500 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>

        <div className="hidden md:block relative h-80 rounded-lg overflow-hidden">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}
