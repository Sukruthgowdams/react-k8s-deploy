import { ChevronRight, Mail } from "lucide-react"
import EventCard from "../components/event-card"
import FeaturedEvent from "../components/featured-event"
import Testimonial from "../components/testimonial"
import CountdownTimer from "../components/countdown-timer"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.jpg" alt="College events" className="h-full w-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>

        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              College Event{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                Management
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Discover, register, and participate in exciting cultural, technical, and sports events happening across
              campus
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0"
              >
                Explore Events
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Register Now
              </Button>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
            <a href="#upcoming-events" className="text-white">
              <ChevronRight className="h-8 w-8 rotate-90" />
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Upcoming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Events</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Mark your calendar for these exciting events happening soon on campus
            </p>
          </div>

          <div className="mb-16">
            <FeaturedEvent
              title="Annual Cultural Festival 2025"
              date="May 15-17, 2025"
              location="Main Auditorium"
              description="Our flagship cultural extravaganza featuring music, dance, drama, and art exhibitions from talented students across departments."
              imageUrl="/images/cultural-fest.jpg"
              category="Cultural"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Hackathon 2025"
              date="April 10, 2025"
              location="Computer Science Block"
              category="Technical"
              imageUrl="/images/hackathon.jpg"
            />
            <EventCard
              title="Battle of Bands"
              date="April 18, 2025"
              location="Open Air Theatre"
              category="Cultural"
              imageUrl="/images/music.jpg"
            />
            <EventCard
              title="Inter-College Cricket Tournament"
              date="April 25, 2025"
              location="College Stadium"
              category="Sports"
              imageUrl="/images/cricket.jpg"
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-700">
              View All Events <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Event{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Categories
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore events by category and find something that matches your interests
            </p>
          </div>

          <Tabs defaultValue="cultural" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>
            <TabsContent
              value="cultural"
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg shadow-lg border border-purple-100"
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
                  <Button className="mt-6 bg-purple-600 hover:bg-purple-700">Register Now</Button>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img src="/images/cultural.jpg" alt="Cultural events" className="h-full w-full object-cover" />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="technical"
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-lg border border-blue-100"
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
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Register Now</Button>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img src="/images/technical.jpg" alt="Technical events" className="h-full w-full object-cover" />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="sports"
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-lg border border-green-100"
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
                  <Button className="mt-6 bg-green-600 hover:bg-green-700">Register Now</Button>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img src="/images/sports.jpg" alt="Sports events" className="h-full w-full object-cover" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Next Big Event</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Annual Cultural Festival 2025 is coming soon!</p>
          </div>

          <CountdownTimer targetDate="2025-05-15T09:00:00" />

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md border border-purple-100 transform transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-700">Events Per Year</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md border border-blue-100 transform transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-700">Student Participants</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-50 to-rose-50 shadow-md border border-pink-100 transform transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-pink-600 mb-2">20+</div>
              <div className="text-gray-700">Colleges Participating</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 shadow-md border border-green-100 transform transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-green-600 mb-2">₹100K+</div>
              <div className="text-gray-700">Prize Money</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Students{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who participated in our previous events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              name="Priya Sharma"
              role="Computer Science, 3rd Year"
              quote="The hackathon was an incredible experience! I learned so much and made great connections with industry professionals."
              imageUrl="/images/student1.jpg"
            />
            <Testimonial
              name="Rahul Verma"
              role="Mechanical Engineering, 4th Year"
              quote="Participating in the robotics competition helped me apply my theoretical knowledge to practical challenges."
              imageUrl="/images/student2.jpg"
            />
            <Testimonial
              name="Ananya Patel"
              role="Fine Arts, 2nd Year"
              quote="The cultural festival gave me a platform to showcase my artistic talents and gain confidence in performing."
              imageUrl="/images/student3.jpg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Questions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our events</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I register for an event?</AccordionTrigger>
                <AccordionContent>
                  You can register for any event by clicking the "Register" button on the event page. You'll need to
                  create an account if you don't already have one, and then follow the registration process for the
                  specific event.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can students from other colleges participate?</AccordionTrigger>
                <AccordionContent>
                  Yes, most of our events are open to students from other colleges. Inter-college events will
                  specifically mention this in their description. You'll need to provide your college ID during
                  registration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there a registration fee?</AccordionTrigger>
                <AccordionContent>
                  Registration fees vary by event. Some events are free to participate, while others may have a nominal
                  fee. The fee details will be mentioned on the specific event registration page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I volunteer for events?</AccordionTrigger>
                <AccordionContent>
                  We welcome student volunteers! You can apply to volunteer by filling out the volunteer form in the
                  "Get Involved" section. Volunteers receive certificates and gain valuable organizational experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How are winners selected?</AccordionTrigger>
                <AccordionContent>
                  Each event has its own judging criteria, which will be shared with participants before the event.
                  Judges typically include faculty members and sometimes industry professionals for technical events.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to get the latest updates on upcoming events
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-purple-900 hover:bg-gray-100">
                Subscribe <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
