// components/landing/HowItWorksSection.tsx
import { ClipboardList, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Crea tu proyecto",
    description: "Define el nombre, objetivos y equipo. Establece las fases y fechas clave desde el inicio.",
    color: "bg-blue-500"
  },
  {
    icon: Users,
    title: "2. Invita a tu equipo",
    description: "Añade colaboradores, asigna roles y responsabilidades. Comienza a delegar tareas específicas.",
    color: "bg-purple-500"
  },
  {
    icon: Rocket,
    title: "3. Haz seguimiento",
    description: "Monitorea el progreso, recibe alertas y ajusta el plan según los resultados obtenidos.",
    color: "bg-green-500"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comienza en <span className="text-blue-600">3 simples pasos</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Configura tu primer proyecto en menos de 5 minutos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Círculo con número */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  <step.icon className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}