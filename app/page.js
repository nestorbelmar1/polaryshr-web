"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Briefcase,
  BarChart3,
  Users,
  ArrowRight,
  MessageCircle,
  Mail,
  Phone
} from "lucide-react";

const painPoints = [
  "Alta rotación en cargos clave",
  "Desorden salarial y brechas internas",
  "Dificultad para atraer talento especializado",
  "Modelos de incentivos poco efectivos"
];

const solutions = [
  {
    title: "Compensaciones estratégicas",
    text: "Diseñamos estructuras salariales, valoraciones de cargo, incentivos y benchmarks para alinear personas, mercado y rentabilidad.",
    icon: BarChart3
  },
  {
    title: "Head Hunting especializado",
    text: "Buscamos perfiles ejecutivos, comerciales y técnicos con criterio consultivo, velocidad y foco en ajuste real al negocio.",
    icon: Briefcase
  },
  {
    title: "Organización y talento",
    text: "Ordenamos roles, perfiles críticos y capacidades para que la estructura acompañe el crecimiento de la empresa.",
    icon: Users
  }
];

const steps = [
  {
    step: "01",
    title: "Diagnóstico ejecutivo",
    text: "Entendemos el problema, sus causas y el impacto en negocio, costo y productividad."
  },
  {
    step: "02",
    title: "Diseño de solución",
    text: "Construimos una propuesta concreta, viable y alineada al mercado y a tu realidad."
  },
  {
    step: "03",
    title: "Implementación",
    text: "Acompañamos la ejecución con criterio técnico, velocidad y foco en adopción."
  },
  {
    step: "04",
    title: "Resultados",
    text: "Medimos impacto y dejamos capacidad instalada para sostener la mejora."
  }
];

const benefits = [
  "Más orden interno y mayor equidad",
  "Mejor atracción y cierre de candidatos",
  "Decisiones con respaldo de mercado",
  "Menor riesgo de sobrecostos laborales",
  "Procesos ejecutivos, ágiles y aterrizados"
];

export default function LandingPolarys() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-blue-200">
              Polaryshr HR Consulting
            </p>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                  Soluciones de compensaciones y head hunting para empresas que necesitan resultados
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                  Ayudamos a ordenar estructuras, definir compensaciones competitivas y atraer talento clave con una mirada ejecutiva, comercial y técnica.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-2xl px-7 text-base">
                    <a href="#contacto">Agenda una reunión</a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="rounded-2xl px-7 text-base">
                    <a href="https://wa.me/56983608738" target="_blank" rel="noreferrer">
                      Escríbeme por WhatsApp
                    </a>
                  </Button>
                </div>
                <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
                  {painPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5" />
                      <span className="text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="rounded-[2rem] border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur-md">
                <CardContent className="p-8 md:p-10">
                  <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-200">
                    Propuesta de valor
                  </p>
                  <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
                    Convertimos desafíos de personas en decisiones que mejoran productividad, atracción y control de costos.
                  </h2>
                  <div className="mt-8 space-y-4 leading-7 text-slate-100">
                    <p>• Consultoría especializada en compensaciones, estructuras y mercado.</p>
                    <p>• Búsqueda de talento ejecutivo, comercial y técnico especializado.</p>
                    <p>• Enfoque boutique, senior y orientado a implementación real.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-700">Qué hacemos</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Tres frentes para resolver problemas críticos de gestión de personas
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="rounded-[2rem] border-slate-200 shadow-sm transition-shadow hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="leading-8 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-700">Por qué elegirnos</p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Experiencia ejecutiva aplicada a decisiones sensibles del negocio
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Polaryshr combina conocimiento técnico en compensaciones y talento con mirada comercial, financiera y organizacional. No solo diseñamos; ayudamos a tomar decisiones que funcionen en la práctica.
            </p>
          </div>
          <Card className="rounded-[2rem] border-slate-200 shadow-sm">
            <CardContent className="p-8 md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-4xl font-bold text-blue-900">20+</p>
                  <p className="mt-2 text-slate-600">años de experiencia</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-900">Senior</p>
                  <p className="mt-2 text-slate-600">atención directa del consultor</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-900">Ágil</p>
                  <p className="mt-2 text-slate-600">metodología práctica y ejecutiva</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-900">Boutique</p>
                  <p className="mt-2 text-slate-600">foco en calidad y personalización</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-700">Metodología</p>
          <h2 className="text-3xl font-bold md:text-5xl">Cómo trabajamos</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <Card key={item.step} className="rounded-[2rem] border-slate-200 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-3 text-sm font-semibold tracking-[0.2em] text-blue-700">{item.step}</div>
                <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-8 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-200">Impacto esperado</p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Más orden, mejor talento y decisiones respaldadas por criterio de mercado
            </h2>
          </div>
          <div className="space-y-4">
            {benefits.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5" />
                <p className="text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-5xl px-6 py-20">
        <Card className="rounded-[2rem] border-slate-200 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-700">Contacto</p>
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">Conversemos sobre tu desafío</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Si necesitas ordenar compensaciones, diseñar incentivos o encontrar talento clave, podemos ayudarte con una propuesta concreta.
                </p>
              </div>
              <div className="space-y-4">
                <a href="mailto:nbelmar@polaryshr.com" className="flex items-center gap-4 rounded-2xl border border-slate-200 px-5 py-4 transition-colors hover:bg-slate-50">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">nbelmar@polaryshr.com</span>
                </a>
                <a href="tel:+56983608738" className="flex items-center gap-4 rounded-2xl border border-slate-200 px-5 py-4 transition-colors hover:bg-slate-50">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+56 9 8360 8738</span>
                </a>
                <a href="https://wa.me/56983608738" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl bg-green-500 px-5 py-4 font-semibold text-white transition-opacity hover:opacity-95">
                  <span className="flex items-center gap-4">
                    <MessageCircle className="h-5 w-5" />
                    Escribirme por WhatsApp
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
