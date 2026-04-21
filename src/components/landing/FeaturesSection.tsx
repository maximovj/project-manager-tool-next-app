// components/landing/FeaturesSection.tsx
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Bell 
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard intuitivo",
    description: "Visualiza el estado de todos tus proyectos de un vistazo con métricas claras y personalizables."
  },
  {
    icon: Users,
    title: "Colaboración en equipo",
    description: "Asigna tareas, comenta en tiempo real y mantén a todos alineados con los objetivos."
  },
  {
    icon: Calendar,
    title: "Cronograma visual",
    description: "Calendarios interactivos y diagramas de Gantt para planificar cada fase del proyecto."
  },
  {
    icon: FileText,
    title: "Documentación centralizada",
    description: "Todos los archivos, especificaciones y recursos en un solo lugar, accesible para todos."
  },
  {
    icon: BarChart3,
    title: "Reportes avanzados",
    description: "Genera informes de progreso, productividad y rendimiento con solo un clic."
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "Notificaciones personalizables para fechas límite, actualizaciones y dependencias críticas."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas para
            <span className="text-blue-600"> gestionar mejor</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Funcionalidades diseñadas para hacer tu trabajo más fácil y productivo
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}