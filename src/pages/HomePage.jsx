"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Mail } from "lucide-react"
import EventCard from "../components/EventCard"
import FeaturedEvent from "../components/FeaturedEvent"
import Testimonial from "../components/Testimonial"
import CountdownTimer from "../components/CountdownTimer"
import QRCodeModal from "../components/QRCodeModal"
import ScrollReveal from "../components/ScrollReveal"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/Accordion"

export default function HomePage() {
  const [qrModalOpen, setQrModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState({
    title: "",
    date: "",
    location: "",
  })

  const openQrModal = (title, date, location) => {
    setSelectedEvent({
      title,
      date,
      location,
    })
    setQrModalOpen(true)
  }

  useEffect(() => {
    // Add scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    revealElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - Increased height */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.jpg" alt="College events" className="h-full w-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute top-[30%] right-[10%] w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-[20%] left-[15%] w-24 h-24 bg-pink-500 rounded-full opacity-15 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[60%] right-[20%] w-36 h-36 bg-indigo-500 rounded-full opacity-10 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              College Event{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 animate-pulse-slow">
                Management
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto text-gray-200 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Discover, register, and participate in exciting cultural, technical, and sports events happening across
              campus
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center mt-10 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
                onClick={() => (window.location.href = "/events")}
              >
                Explore Events
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
                onClick={() => openQrModal("Annual Cultural Festival 2025", "May 15-17, 2025", "Main Auditorium")}
              >
                Register Now
              </Button>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
            <a href="#upcoming-events" className="text-white hover:text-purple-300 transition-colors">
              <ChevronRight className="h-10 w-10 rotate-90" />
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Upcoming{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 animate-pulse-slow">
                  Events
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Mark your calendar for these exciting events happening soon on campus
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal">
            <div className="mb-16 hover:scale-[1.02] transition-all duration-500">
              <FeaturedEvent
                title="Annual Cultural Festival 2025"
                date="May 15-17, 2025"
                location="Main Auditorium"
                description="Our flagship cultural extravaganza featuring music, dance, drama, and art exhibitions from talented students across departments."
                imageUrl="/images/cultural-fest.jpg"
                category="Cultural"
                onRegisterClick={() =>
                  openQrModal("Annual Cultural Festival 2025", "May 15-17, 2025", "Main Auditorium")
                }
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="reveal-left" className="hover:scale-105 transition-all duration-500">
              <EventCard
                title="Hackathon 2025"
                date="April 10, 2025"
                location="Computer Science Block"
                category="Technical"
                imageUrl="/images/hackathon.jpg"
                onRegisterClick={() => openQrModal("Hackathon 2025", "April 10, 2025", "Computer Science Block")}
              />
            </ScrollReveal>
            <ScrollReveal
              animation="reveal-up"
              className="hover:scale-105 transition-all duration-500"
              style={{ transitionDelay: "0.2s" }}
            >
              <EventCard
                title="Battle of Bands"
                date="April 18, 2025"
                location="Open Air Theatre"
                category="Cultural"
                imageUrl="/images/music.jpg"
                onRegisterClick={() => openQrModal("Battle of Bands", "April 18, 2025", "Open Air Theatre")}
              />
            </ScrollReveal>
            <ScrollReveal
              animation="reveal-right"
              className="hover:scale-105 transition-all duration-500"
              style={{ transitionDelay: "0.4s" }}
            >
              <EventCard
                title="Inter-College Cricket Tournament"
                date="April 25, 2025"
                location="College Stadium"
                category="Sports"
                imageUrl="/images/cricket.jpg"
                onRegisterClick={() =>
                  openQrModal("Inter-College Cricket Tournament", "April 25, 2025", "College Stadium")
                }
              />
            </ScrollReveal>
          </div>

          <ScrollReveal animation="reveal-up">
            <div className="text-center mt-16">
              <Button
                variant="outline"
                className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                onClick={() => (window.location.href = "/events")}
              >
                View All Events <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rest of the sections with animations added */}
      {/* Event Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Event{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse-slow">
                  Categories
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore events by category and find something that matches your interests
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal">
            <Tabs defaultValue="cultural" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="cultural" className="transition-all duration-300 hover:scale-105">
                  Cultural
                </TabsTrigger>
                <TabsTrigger value="technical" className="transition-all duration-300 hover:scale-105">
                  Technical
                </TabsTrigger>
                <TabsTrigger value="sports" className="transition-all duration-300 hover:scale-105">
                  Sports
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="cultural"
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg shadow-lg border border-purple-100 animate-scale-in"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-800">Cultural Events</h3>
                    <p className="text-gray-700 mb-4">
                      Showcase your artistic talents and creativity through various cultural events.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div> Music Competitions
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div> Dance Performances
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div> Theatrical Plays
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div> Art Exhibitions
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div> Literary Contests
                      </li>
                    </ul>
                    <Button
                      className="mt-6 bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300"
                      onClick={() => openQrModal("Cultural Events Registration", "Various Dates", "Multiple Venues")}
                    >
                      Register Now
                    </Button>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="/images/cultural.jpg"
                      alt="Cultural events"
                      className="h-full w-full object-cover hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="technical"
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-lg border border-blue-100 animate-scale-in"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Technical Events</h3>
                    <p className="text-gray-700 mb-4">
                      Challenge your technical skills and innovative thinking through various competitions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Hackathons
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Coding Competitions
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Robotics Challenges
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Paper Presentations
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Project Exhibitions
                      </li>
                    </ul>
                    <Button
                      className="mt-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                      onClick={() =>
                        openQrModal("Technical Events Registration", "Various Dates", "Computer Science Block")
                      }
                    >
                      Register Now
                    </Button>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="/images/technical.jpg"
                      alt="Technical events"
                      className="h-full w-full object-cover hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="sports"
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-lg border border-green-100 animate-scale-in"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-green-800">Sports Events</h3>
                    <p className="text-gray-700 mb-4">
                      Showcase your athletic abilities and team spirit through various sporting events.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> Cricket Tournament
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> Football Championship
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> Basketball League
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> Athletics Meet
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> Chess Tournament
                      </li>
                    </ul>
                    <Button
                      className="mt-6 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300"
                      onClick={() => openQrModal("Sports Events Registration", "Various Dates", "College Stadium")}
                    >
                      Register Now
                    </Button>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="/images/sports.jpg"
                      alt="Sports events"
                      className="h-full w-full object-cover hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Next Big Event</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">Annual Cultural Festival 2025 is coming soon!</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal">
            <CountdownTimer targetDate="2025-05-15T09:00:00" />
          </ScrollReveal>

          <ScrollReveal animation="reveal-up">
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg px-8 py-6"
                onClick={() => openQrModal("Annual Cultural Festival 2025", "May 15-17, 2025", "Main Auditorium")}
              >
                Register Now
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal animation="reveal-left" className="transform transition-all duration-500 hover:scale-110">
              <div className="p-8 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md border border-purple-100">
                <div className="text-5xl font-bold text-purple-600 mb-2 animate-pulse-slow">50+</div>
                <div className="text-gray-700">Events Per Year</div>
              </div>
            </ScrollReveal>
            <ScrollReveal
              animation="reveal-up"
              className="transform transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md border border-blue-100">
                <div className="text-5xl font-bold text-blue-600 mb-2 animate-pulse-slow">5000+</div>
                <div className="text-gray-700">Student Participants</div>
              </div>
            </ScrollReveal>
            <ScrollReveal
              animation="reveal-up"
              className="transform transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="p-8 rounded-lg bg-gradient-to-br from-pink-50 to-rose-50 shadow-md border border-pink-100">
                <div className="text-5xl font-bold text-pink-600 mb-2 animate-pulse-slow">20+</div>
                <div className="text-gray-700">Colleges Participating</div>
              </div>
            </ScrollReveal>
            <ScrollReveal
              animation="reveal-right"
              className="transform transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="p-8 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 shadow-md border border-green-100">
                <div className="text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">₹100K+</div>
                <div className="text-gray-700">Prize Money</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What Students{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse-slow">
                  Say
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Hear from students who participated in our previous events
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="reveal-left" className="hover:scale-105 transition-all duration-500">
              <Testimonial
                name="Priya Sharma"
                role="Computer Science, 3rd Year"
                quote="The hackathon was an incredible experience! I learned so much and made great connections with industry professionals."
                imageUrl="/images/student1.jpg"
              />
            </ScrollReveal>
            <ScrollReveal
              animation="reveal-up"
              className="hover:scale-105 transition-all duration-500"
              style={{ transitionDelay: "0.2s" }}
            >
              <Testimonial
                name="Rahul Verma"
                role="Mechanical Engineering, 4th Year"
                quote="Participating in the robotics competition helped me apply my theoretical knowledge to practical challenges."
                imageUrl="/images/student2.jpg"
              />
            </ScrollReveal>
            <ScrollReveal
              animation="reveal-right"
              className="hover:scale-105 transition-all duration-500"
              style={{ transitionDelay: "0.4s" }}
            >
              <Testimonial
                name="Ananya Patel"
                role="Fine Arts, 2nd Year"
                quote="The cultural festival gave me a platform to showcase my artistic talents and gain confidence in performing."
                imageUrl="/images/student3.jpg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse-slow">
                  Questions
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Find answers to common questions about our events
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="hover:bg-purple-50 transition-all duration-300">
                  <AccordionTrigger>How do I register for an event?</AccordionTrigger>
                  <AccordionContent>
                    You can register for any event by clicking the "Register" button on the event page. You'll be shown
                    a QR code that you can scan with your phone camera. Alternatively, you can copy the registration
                    link and complete the process on your device.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="hover:bg-purple-50 transition-all duration-300">
                  <AccordionTrigger>Can students from other colleges participate?</AccordionTrigger>
                  <AccordionContent>
                    Yes, most of our events are open to students from other colleges. Inter-college events will
                    specifically mention this in their description. You'll need to provide your college ID during
                    registration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="hover:bg-purple-50 transition-all duration-300">
                  <AccordionTrigger>Is there a registration fee?</AccordionTrigger>
                  <AccordionContent>
                    Registration fees vary by event. Some events are free to participate, while others may have a
                    nominal fee. The fee details will be mentioned on the specific event registration page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="hover:bg-purple-50 transition-all duration-300">
                  <AccordionTrigger>How can I volunteer for events?</AccordionTrigger>
                  <AccordionContent>
                    We welcome student volunteers! You can apply to volunteer by filling out the volunteer form in the
                    "Get Involved" section. Volunteers receive certificates and gain valuable organizational experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="hover:bg-purple-50 transition-all duration-300">
                  <AccordionTrigger>How are winners selected?</AccordionTrigger>
                  <AccordionContent>
                    Each event has its own judging criteria, which will be shared with participants before the event.
                    Judges typically include faculty members and sometimes industry professionals for technical events.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="reveal-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Subscribe to our newsletter to get the latest updates on upcoming events
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                />
                <Button className="bg-white text-purple-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Subscribe <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        eventTitle={selectedEvent.title}
        eventDate={selectedEvent.date}
        eventLocation={selectedEvent.location}
      />
    </div>
  )
}
