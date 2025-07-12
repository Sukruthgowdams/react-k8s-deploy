"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
        <div className="text-5xl font-bold text-white mb-2">{timeLeft.days}</div>
        <div className="text-gray-300 uppercase text-sm tracking-wider">Days</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
        <div className="text-5xl font-bold text-white mb-2">{timeLeft.hours}</div>
        <div className="text-gray-300 uppercase text-sm tracking-wider">Hours</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
        <div className="text-5xl font-bold text-white mb-2">{timeLeft.minutes}</div>
        <div className="text-gray-300 uppercase text-sm tracking-wider">Minutes</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
        <div className="text-5xl font-bold text-white mb-2">{timeLeft.seconds}</div>
        <div className="text-gray-300 uppercase text-sm tracking-wider">Seconds</div>
      </div>
    </div>
  )
}
