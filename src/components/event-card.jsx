import { Calendar, MapPin } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export default function EventCard({ title, date, location, category, imageUrl }) {
  const categoryColors = {
    Cultural: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    Technical: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Sports: "bg-green-100 text-green-800 hover:bg-green-200",
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <div className="relative h-48 w-full">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className={categoryColors[category]}>{category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  )
}
