"use client"

import { Calendar, MapPin } from "lucide-react"
import { Button } from "./ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/Card"
import { Badge } from "./ui/Badge"

export default function EventCard({ title, date, location, category, imageUrl, onRegisterClick }) {
  const categoryColors = {
    Cultural: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    Technical: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Sports: "bg-green-100 text-green-800 hover:bg-green-200",
  }

  return (
    <Card className="overflow-hidden transition-all duration-500 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm group">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <Badge className={`${categoryColors[category]} animate-fade-in`}>{category}</Badge>
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
        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-300"
          onClick={() => onRegisterClick && onRegisterClick(title, date, location)}
        >
          Register Now
        </Button>
      </CardFooter>
    </Card>
  )
}
