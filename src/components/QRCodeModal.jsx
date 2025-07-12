"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/Button"
import QRCode from "qrcode.react"

export default function QRCodeModal({ isOpen, onClose, eventTitle, eventDate, eventLocation }) {
  const [copied, setCopied] = useState(false)
  const registrationUrl = `https://eventhub.edu/register?event=${encodeURIComponent(eventTitle)}&date=${encodeURIComponent(eventDate)}&location=${encodeURIComponent(eventLocation)}`

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(registrationUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg w-full max-w-md p-6 animate-scale-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Register for Event</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-1">{eventTitle}</h3>
          <p className="text-gray-600 mb-1">{eventDate}</p>
          <p className="text-gray-600">{eventLocation}</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="p-3 bg-white rounded-lg shadow-md animate-pulse-slow">
            <QRCode
              value={registrationUrl}
              size={200}
              level="H"
              includeMargin={true}
              renderAs="svg"
              imageSettings={{
                src: "/images/logo-small.png",
                excavate: true,
                height: 30,
                width: 30,
              }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-center text-gray-700">
            Scan this QR code with your phone camera to register for the event
          </p>

          <div className="flex flex-col space-y-2">
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:scale-105"
              onClick={copyToClipboard}
            >
              {copied ? "Copied!" : "Copy Registration Link"}
            </Button>

            <Button
              variant="outline"
              className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
