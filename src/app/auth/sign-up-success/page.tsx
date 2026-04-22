"use client"

import { CheckCircle2, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-green-200 dark:border-green-900 shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl">¡Gracias por registrarte!</CardTitle>
              <CardDescription className="text-base">
                Verifica tu correo electrónico
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Mail className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Te hemos enviado un enlace de confirmación a tu correo electrónico
                </p>
              </div>
              
              <p className="text-center text-sm text-muted-foreground">
                ¿No recibiste el correo? Revisa tu carpeta de spam o{' '}
                <button 
                  className="text-primary underline underline-offset-4 hover:text-primary/90"
                  onClick={() => {
                    // Aquí puedes agregar la lógica para reenviar el correo
                    console.log('Reenviar correo de confirmación')
                  }}
                >
                  haz clic aquí para reenviar
                </button>
              </p>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">o</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/auth/login">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inicio de sesión
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}