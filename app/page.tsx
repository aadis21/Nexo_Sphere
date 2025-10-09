"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

import {
  ChevronDown,
  Sparkles,
  CheckCircle,
  Handshake,
  Users,
  ShieldCheck,
  Globe,
  Smartphone,
  Palette,
  Share2,
  Plus,
  Star,
  ArrowRight,
  Mail,
  MessageCircle,
  Instagram,
  ExternalLink,
} from "lucide-react"

export default function paypll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "UI/UX for Websites",
      description: "Intuitive and engaging web interfaces that convert visitors into customers.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App UI/UX Design",
      description: "Mobile-first design approach for seamless app experiences across all devices.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding Solutions",
      description: "Complete brand identity packages that make your business stand out.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Packages",
      description: "Engaging content strategies and designs for all social media platforms.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Freelancing Services",
      description: "Pitch decks, logo animations, and other creative services to complete your brand.",
    },
    
  ]

 const portfolio = [
  {
    title: "AlumniConnect",
    description:
      "A robust web platform built with Django to connect students and alumni, featuring secure role-based dashboards, smart search, and interactive community tools.",
    tags: ["Django", "Web App", "PostgreSQL"],
    image: "/demo1.jpg?height=300&width=400",
  },
  {
    title: "Patient Management System",
    description:
      "A scalable healthcare backend using Spring Boot, with 60+ REST APIs, Kafka integration, and role-based access for secure management of patients, doctors, and appointments.",
    tags: ["Spring Boot", "Kafka", "REST API", "MySQL"],
    image: "/demo2.jpg?height=300&width=400",
  },
  {
    title: "GamePredictor Pro – Mines & Color",
    description:
      "Frontend-based prediction tool for Mines and Color Trading games on betting platforms, using custom JavaScript logic for trend analysis and real-time suggestions.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/demo3.jpg?height=300&width=400",
  },
  {
    title: "VentureLab Incubator WebApp",
    description:
      "A two-sided platform to streamline the startup incubation process, enabling cohort management, application reviews, and startup progress tracking.",
    tags: ["Django", "React", "PostgreSQL"],
    image: "demo4.png?height=300&width=400",
  },
  {
    title: "CohortFlow CRM",
    description:
      "Backend system for managing incubator workflows and cohort lifecycles, featuring 100+ REST APIs, Celery-based notifications, and file storage with DigitalOcean Spaces.",
    tags: ["Django REST", "PostgreSQL", "Celery", "DigitalOcean Spaces"],
    image: "/demo5.png?height=300&width=400",
  },
  {
    title: "Grievance Portal",
    description:
      "Full-stack complaint management system with role-based access, status filtering, resolution timelines, and real-time updates.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/demo6.png?height=300&width=400",
  },
  {
    title: "SewaBuddy: A Bus Booking Platform",
    description:
      "A web app for intercity bus bookings with dynamic seat selection, admin route management, and real-time availability.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/demo7.webp?height=300&width=400",
  },
  {
    title: "3D Motion Food Application",
    description:
      "A food delivery app prototype with 3D motion design, animated transitions, and an engaging user journey from browsing to checkout.",
    tags: ["Figma", "Prototyping"],
    image: "/demo8.png?height=300&width=400",
  },
  {
    title: "Portfolio Landing Page",
    description:
      "A minimalist personal landing page to showcase skills, projects, and contact info with clean typography and micro-interactions.",
    tags: ["Figma", "UI Design"],
    image: "/demo9.png?height=300&width=400",
  },
  {
    title: "ACM – Website 2021–2022",
    description:
      "An informational website for the ACM community chapter, featuring event listings, past sessions, and resources for members.",
    tags: ["Figma", "UI Design"],
    image: "/demo10.png?height=300&width=400",
  },
  {
    title: "Electro-Ecom Website",
    description:
      "eCommerce website prototype focused on electronics, with responsive wireframes and clickable prototypes.",
    tags: ["Figma", "Wireframes", "Prototypes"],
    image: "/demo11.png?height=300&width=400",
  },
  {
    title: "Langoconnect App",
    description:
      "Travel-assist mini app for real-time text and voice translation with signboard camera scanning features.",
    tags: ["Figma", "Mobile UI"],
    image: "/demo12.png?height=300&width=400",
  },
  {
    title: "Mother Care App",
    description:
      "Healthcare mobile app for pregnant women featuring water reminders, guided exercises, and online consultations.",
    tags: ["Figma", "Mobile UI"],
    image: "/demo13.png?height=300&width=400",
  },
  {
    title: "Dubai Real Estate Website",
    description:
      "A luxury real estate website with advanced search filters, property listings, and admin-controlled content updates.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/demo14.png?height=300&width=400",
  },
   {
    title: "FoodFusion – Restaurant Website",
    description:
      "A fully responsive restaurant website showcasing brand, menu, and services with interactive menus, reservation booking, and customer testimonials. Built with a mobile-first design approach and smooth UI transitions.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/demo15.png?height=300&width=400",
  },
  {
    title: "ShopEase – E-commerce Frontend",
    description:
      "An e-commerce frontend simulating a real online shopping experience with product listings, category filters, cart functionality, and responsive UI.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    image: "/demo16.jpeg?height=300&width=400",
  },
  // {
  //   title: "QuickMeet – Meeting Scheduler App",
  //   description:
  //     "A real-time meeting scheduling tool with booking slots, invite management, role-based access, and live updates using WebSockets.",
  //   tags: ["React", "Node.js", "MongoDB", "Socket.io"],
  //   image: "/placeholder.svg?height=300&width=400",
  // },
  {
    title: "AdminPro – Analytics Dashboard",
    description:
      "A customizable admin dashboard template with real-time data visualization, charts, KPI tracking, and role-based content for startups and internal teams.",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    image: "/demo17.png?height=300&width=400",
  },
  {
    title: "EduPortal – Online Learning Platform",
    description:
      "A mini LMS where instructors upload courses and students enroll to view video lectures, take quizzes, and earn completion certificates.",
    tags: ["Django", "HTML", "CSS", "PostgreSQL", "JavaScript"],
    image: "/demo18.jpeg?height=300&width=400",
  },
]



const testimonials = [
  {
    quote:
      "Experienced XR Developer with a strong background in AR/VR solutions, Unity development, and immersive training simulators. Worked with the Indian Air Force and won multiple national hackathons. Received ₹2.25L funding for ChemLit XR and delivered AR/VR workshops across top institutions.",
    name: "Akarsh Anand Sinha",
    role: "XR Developer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "I'm a UI/UX Designer currently in the final semester of my MCA at Thapar University. At present, I'm interning at Venture Lab, the university’s startup incubator, where I collaborate with early-stage startups to design user-friendly digital products. I specialize in Figma, wireframing, prototyping, and visual storytelling—focused on simplifying complex workflows and enhancing user experience through intuitive design.",
    name: "Kanishk Dadwal",
    role: "UI/UX Designer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "I'm a Software Developer specializing in Java (Spring Boot) and Python (Django). I build scalable backend systems, robust REST APIs, and full-stack applications with real-world deployment experience on AWS. My focus is on clean architecture, modular code, and performance-driven solutions tailored for real-world impact.",
    name: "Rahul",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "I'm a Frontend and Python Developer with a passion for building clean, responsive, and intuitive web applications. I specialize in modern frontend frameworks like React and Next.js, and I pair them with powerful backends using Django. With a strong eye for UI/UX and experience in RESTful API integration, I deliver full-stack solutions that are both user-centric and performance-driven. I enjoy turning complex problems into elegant, functional designs that work seamlessly across platforms.",
    name: "Ashneet Kaur",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              paypll
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                Portfolio
              </a>
              <a href="#aboutus" className="hover:text-blue-400 transition-colors">
                About Us
              </a>

              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
              
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 border border-blue-500 glow-blue">Get Quote</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="stars"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Designs That</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Speak.
            </span>
            <span className="block">Delivery That</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Stuns.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Built for brands that move fast, think bold, and demand the best.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 border border-blue-500 glow-blue px-8 py-4 text-lg"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="#portfolio">
  <Button
    size="lg"
    variant="outline"
    className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg"
  >
    View Portfolio
  </Button>
</a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

     {/* About Section */}
{/* About Section */}
<section id="aboutus" className="py-24 px-6 bg-gray-900/30">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        About {" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          paypll
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        paypll is a futuristic creative agency that transforms bold visions into digital reality. Our team blends
        cutting-edge design, innovative technologies, and strategic thinking to craft unforgettable digital
        experiences. With a passion for innovation and a commitment to excellence, we empower brands to connect, inspire,
        and grow in today’s dynamic digital landscape.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {[
        { icon: <Globe className="w-8 h-8" />, title: "Global Quality", desc: "Delivering world-class solutions across industries." },
        { icon: <ArrowRight className="w-8 h-8" />, title: "Fast Delivery", desc: "Lightning-fast turnaround without compromising quality." },
        { icon: <Star className="w-8 h-8" />, title: "Startup-Ready", desc: "Empowering startups and enterprises to scale with confidence." },
        { icon: <Palette className="w-8 h-8" />, title: "Future-Centric", desc: "Designing tomorrow's experiences, today." },
      ].map((feature, index) => (
        <Card
          key={index}
          className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:glow-card"
        >
          <CardContent className="p-6 text-center">
            <div className="text-blue-400 mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          To empower businesses with creative, innovative, and scalable digital solutions that leave a lasting impact.
          We strive to deliver exceptional user experiences and cutting-edge designs that help our clients achieve their
          digital goals.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
        <ul className="space-y-4 text-gray-400">
          <li className="flex items-start">
            <Sparkles className="w-5 h-5 text-blue-400 mr-3 mt-1" />
            Innovation that drives transformation
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
            Commitment to excellence
          </li>
          <li className="flex items-start">
            <Handshake className="w-5 h-5 text-blue-400 mr-3 mt-1" />
            Client-first approach
          </li>
          <li className="flex items-start">
            <Users className="w-5 h-5 text-blue-400 mr-3 mt-1" />
            Collaboration and transparency
          </li>
          <li className="flex items-start">
            <ShieldCheck className="w-5 h-5 text-blue-400 mr-3 mt-1" />
            Integrity and trust
          </li>
        </ul>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
       <video
          src="/demoabout1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-black/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:glow-card group"
              >
                <CardContent className="p-8">
                  <div className="text-blue-400 mb-6 group-hover:text-cyan-400 transition-colors">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing our latest projects and creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:glow-card group overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-cyan-900/50 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* <Button variant="ghost" className="text-blue-400 hover:text-cyan-400 p-0">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-24 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-black/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:glow-card"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      
    
{/* teamTestimonials Section */}
{/* <section id="team" className="py-24 px-6 bg-gray-900/30">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Meet Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-black/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:glow-card"
        >
          <CardContent className="p-8">
            <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
            <div className="flex items-center mb-6">
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <a href="#portfolio">
              <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                View Projects
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section> */}







      {/* Pricing Teaser */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Starting at{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">₹3,000</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">Speed delivery available</p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 border border-blue-500 glow-blue px-12 py-4 text-lg"
          >
            Request Pricing Sheet
          </Button>
        </div>
      </section>

   
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-blue-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                paypll
              </div>
              <p className="text-gray-400">Where Bold Brands Are Born.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
                <a href="#portfolio" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <MessageCircle className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 pt-8 border-t border-blue-500/20">
            <p>&copy; 2024 paypll. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
