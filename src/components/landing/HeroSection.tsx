// components/landing/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            🚀 La nueva forma de gestionar proyectos
          </div>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Administra tus proyectos
            <br />
            con <span className="text-blue-600">eficiencia total</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="max-w-2xl text-lg md:text-xl text-gray-600">
            Organiza tareas, colabora con tu equipo y alcanza tus objetivos más rápido.
            Todo lo que necesitas en una sola herramienta.
          </p>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" className="gap-2 cursor-pointer">
                Comenzar ahora <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Ver demo
            </Button>
          </div>
          
          {/* Estadísticas sociales */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">+10k</div>
              <div className="text-sm text-gray-600">Proyectos gestionados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">+500</div>
              <div className="text-sm text-gray-600">Equipos activos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}