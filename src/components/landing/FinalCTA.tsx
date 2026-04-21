// components/landing/FinalCTA.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-center">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para transformar tu gestión?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Únete a miles de equipos que ya optimizaron su productividad con nuestra herramienta
            </p>
            
            {/* Lista de beneficios */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5" />
                <span>Prueba 14 días gratis</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5" />
                <span>Cancelas cuando quieras</span>
              </div>
            </div>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2 cursor-pointer">
                  Comenzar prueba gratis <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-slate-600 hover:bg-blue-400/10 cursor-pointer">
                Solicitar demo
              </Button>
            </div>
            
            <p className="text-sm text-blue-100 mt-6">
              ✅ No necesitas tarjeta de crédito para comenzar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}