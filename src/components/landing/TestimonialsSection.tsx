// components/landing/TestimonialsSection.tsx
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Project Manager en TechCorp",
    content: "Esta herramienta transformó completamente nuestra gestión. Pasamos de usar 4 plataformas diferentes a solo una. La productividad del equipo aumentó un 40%.",
    rating: 5,
    avatar: "MG"
  },
  {
    name: "Carlos Rodríguez",
    role: "CEO en StartupDev",
    content: "La mejor inversión que hicimos este año. El dashboard es increíblemente claro y las alertas nos han salvado de varios retrasos importantes.",
    rating: 5,
    avatar: "CR"
  },
  {
    name: "Laura Martínez",
    role: "Team Lead en Innovatech",
    content: "Mis desarrolladores adoran lo intuitivo que es. La colaboración en tiempo real y los reportes automáticos nos ahorran horas cada semana.",
    rating: 5,
    avatar: "LM"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen <span className="text-blue-600">nuestros usuarios</span>
          </h2>
          <p className="text-gray-600 text-lg">
            +500 equipos confían en nosotros para gestionar sus proyectos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Contenido */}
              <p className="text-gray-700 mb-6 italic">
                {testimonial.content}
              </p>
              
              {/* Autor */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo de empresas que confían */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            <span className="text-xl font-bold text-gray-400">TechCorp</span>
            <span className="text-xl font-bold text-gray-400">StartupDev</span>
            <span className="text-xl font-bold text-gray-400">Innovatech</span>
            <span className="text-xl font-bold text-gray-400">CodeLabs</span>
          </div>
        </div>
      </div>
    </section>
  );
}