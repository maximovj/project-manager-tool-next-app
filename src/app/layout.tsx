// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Montserrat } from 'next/font/google'
import { Navbar } from "@/components/layouts/Navbar";

const monserrat = Montserrat({
  variable: '--fonts-monserrat',
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Project Manager Tool",
  description: "Herramienta de Administración de proyectos",
  applicationName: "Project Manager Tool",
  authors: [{name: "Víctor J.", url: "https://github.com/maximovj"}],
  creator: "Víctor J. (https://github.com/maximovj)",
  keywords: ["project", "manager", "tool"],
  openGraph: {
    type: "website",
    url: "https://github.com/maximovj/project-manager-tool-next-app",
    title: "Project Manager Tool",
    description: "Herramienta de Administración de proyectos",
    siteName: "Project Manager Tool",
    images: [{ url: "https://github.com/maximovj/project-manager-tool-next-app" }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full", monserrat.variable)}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </TooltipProvider>
      </body>
    </html>
  );
}