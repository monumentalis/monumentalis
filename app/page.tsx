"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  Factory,
  Globe2,
  Hammer,
  Landmark,
  Mail,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "For Architects", href: "#architects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

<a href="/de">DE</a>

import Image from "next/image";

const services = [
  {
    icon: Landmark,
    title: "Monumental Sculpture",
    description:
      "Civic monuments, memorials, commemorative statues, and landmark-scale sculptural works for public and institutional environments.",
  },
  {
    icon: Compass,
    title: "Art Integration",
    description:
      "We help teams integrate sculpture and custom art into architectural, landscape, hospitality, and real estate projects from concept onward.",
  },
  {
    icon: Factory,
    title: "Production Sourcing",
    description:
      "Access to vetted manufacturing partners across materials and scales, coordinated under a single point of responsibility.",
  },
  {
    icon: Hammer,
    title: "Custom Fabrication",
    description:
      "Stone, bronze, resin, metal, mixed media, reliefs, fountains, and bespoke sculptural elements tailored to project needs.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Coordination",
    description:
      "Material selection, dimensional planning, site coordination, installation planning, and execution supervision to reduce project risk.",
  },
  {
    icon: Truck,
    title: "Delivery & Installation",
    description:
      "End-to-end coordination from approved concept to production, logistics, and on-site placement for a seamless delivery process.",
  },
];

const process = [
  {
    number: "01",
    title: "Project Brief",
    text: "You share your concept, drawings, references, budget parameters, timeline, and site conditions.",
  },
  {
    number: "02",
    title: "Curated Proposal",
    text: "We define the right artistic and manufacturing approach, then match the brief with the best production path.",
  },
  {
    number: "03",
    title: "Management & Execution",
    text: "We coordinate design refinement, fabrication, technical communication, quality control, and progress tracking.",
  },
  {
    number: "04",
    title: "Delivery & Installation",
    text: "We finalize transport, installation planning, and handover, with a professional process from first inquiry to finished work.",
  },
];

const portfolio = [
  {
    title: "Civic Memorial Commission",
    category: "Memorial / Public Space",
    details: "Stone and bronze concept for a commemorative urban installation",
    image: "/images/civic_memorial.png",
  },
  {
    title: "Architectural Relief Element",
    category: "Facade / Architectural Art",
    details: "Integrated sculptural relief designed for permanent facade application",
    image: "/images/relief.png",
  },
  {
    title: "Monumental Plaza Feature",
    category: "Urban Design / Landmark",
    details: "Large-scale sculptural centerpiece for a public plaza environment",
    image: "/images/monumental.png",
  },
  {
    title: "Garden & Fountain Ensemble",
    category: "Landscape / Hospitality",
    details: "Decorative sculptural composition adapted for exterior installation",
    image: "/images/bronze-fountain.png",
  },
  {
    title: "Commemorative Portrait Bust",
    category: "Portrait / Institutional",
    details: "Custom portrait sculpture executed for a formal commemorative setting",
    image: "/images/bust.png",
  },
  {
    title: "Contemporary Abstract Form",
    category: "Luxury Development / Art Feature",
    details: "Modern sculptural accent for premium built environments and branding value",
    image: "/images/abstract.png",
  },
  {
  title: "Religious Sculpture & Sacred Art",
  category: "Church / Spiritual Architecture",
  details: "Custom sculptures, statues and reliefs for churches and sacred spaces",
  image: "/images/religious.png",
},
{
  title: "Private Estate Sculpture",
  category: "Luxury / Private Commission",
  details: "Custom sculptures designed for villas, estates and private collectors",
  image: "/images/private.png",
},
{
  title: "Commemorative Plaques & Reliefs",
  category: "Institutional / Memorial",
  details: "Custom plaques, bas-reliefs and inscriptions for public and private projects",
  image: "/images/plaque.png",
},
{
  title: "Architectural Scale Masterpieces",
  category: "Architectural Art / Scale Model",
  details:
    "Handcrafted architectural scale model executed in bronze, designed for presentation, legacy, and collector-level display",
  image: "/images/architectural_model.png",
},
{
  title: "Heritage & Medieval Replicas",
  category: "Castle Restoration / Historical Reconstruction",
  details:
    "Faithful reproduction of historical elements including artillery, architectural features, and heritage components for restoration and preservation projects",
  image: "/images/medieval_cannon.png",
},
{
  title: "Luxury Portrait Commissions",
  category: "Fine Art / Bespoke Painting",
  details:
    "Hand-painted portrait commissions presented in ornate gilded frames, created for private residences, legacy collections, and distinguished interiors.",
  image: "/images/luxury_painting.png",
},
];

const audiences = [
  {
    title: "Architecture Studios",
    text: "A flexible partner for integrating custom art into concept-led projects without adding coordination burden to the design team.",
  },
  {
    title: "Developers",
    text: "A way to increase prestige, differentiation, and placemaking impact through signature art pieces and landmark installations.",
  },
  {
    title: "Public Institutions",
    text: "A structured solution for memorials, monuments, commemorative commissions, and permanent civic installations.",
  },
  {
    title: "Landscape & Hospitality Teams",
    text: "Outdoor sculpture, fountains, and artistic features adapted to guest experience, public realm value, and project identity.",
  },
];

const advantages = [
  "A single, accountable partner from concept to final installation",
  "Structured execution that eliminates fragmentation and reduces project risk",
  "Access to bespoke fabrication across materials, scales, and artistic disciplines",
  "Precision coordination aligned with architectural, civic, and institutional standards",
  "Tailored solutions for landmark projects, public spaces, and high-value environments",
  "A collaboration model designed for long-term partnerships and repeat commissions",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex rounded-full border border-stone-300/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600 backdrop-blur">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-stone-600 md:text-lg">{description}</p>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/monumentalis-logo.svg"
            alt="Monumentalis logo"
            className="h-16 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition hover:text-stone-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            EN
          </span>

          <a
            href="/de"
            className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600 transition hover:border-stone-950 hover:text-stone-950"
          >
            DE
          </a>

          <a
            href="/fr"
            className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600 transition hover:border-stone-950 hover:text-stone-950"
          >
            FR
          </a>

          <Button asChild className="rounded-2xl px-5">
            <a href="#contact">START A PROJECT</a>
          </Button>
        </div>

        <button
          className="inline-flex rounded-xl border border-stone-200 p-2 text-stone-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 lg:px-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-3 flex gap-2 px-3">
              <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold text-white">
                EN
              </span>
              <a
                href="/de"
                className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold"
              >
                DE
              </a>
              <a
                href="/fr"
                className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold"
              >
                FR
              </a>
            </div>

            <Button asChild className="mt-2 rounded-xl">
              <a href="#contact" onClick={() => setOpen(false)}>
                START A PROJECT
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,113,108,0.15),transparent_35%),linear-gradient(to_bottom,rgba(250,250,249,0.95),rgba(245,245,244,1))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-400">
  Art Integration for Architecture
</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-stone-950 md:text-7xl">
            Architectural Art & Monumental Sculpture Integration for Landmark Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
            We collaborate with architects, developers and institutions to design, manage and deliver custom sculptural works for public spaces and large-scale environments.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-2xl px-6 text-base">
              <a href="#contact">
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl px-6 text-base">
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
  ["End-to-End", "From project brief to completed installation"],
  ["B2B Ready", "Structured for architects, developers, and institutions"],
  ["Cost-Efficient", "Managed through a partner-based execution model"],
].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                <div className="text-sm font-semibold text-stone-900">{title}</div>
                <div className="mt-1 text-sm leading-6 text-stone-600">{text}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-stone-200 blur-3xl lg:block" />
          <div className="absolute -right-8 bottom-8 hidden h-36 w-36 rounded-full bg-amber-100 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-2xl shadow-stone-300/30">
            <Image
  src="/images/hero.png"
  alt="Custom monumental sculpture integrated into an architectural public space project"
  width={1200}
  height={900}
  priority
  className="h-[560px] w-full object-cover"
/>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/35 to-transparent p-8 text-white">
              <div className="max-w-lg">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-200">
                  Positioning Statement
                </div>
                <div className="mt-3 text-2xl font-medium leading-snug">
                  We turn sculpture and monumental art into a structured, professionally managed project solution.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-3 text-center md:grid-cols-4 md:text-left">
          {[
            "Architecture Studios",
            "Developers",
            "Public Institutions",
            "Hospitality & Landscape Projects",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-600"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
  eyebrow="Services"
  title="A complete system for sourcing, managing, and delivering custom sculpture and art projects"
  description="Monumentalis is designed for clients who need more than a sculpture studio. We provide a structured system for planning, sourcing, managing, and delivering custom-made art pieces for architecture, memorial, civic, religious, and public-space projects."
/>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <Card className="h-full rounded-[1.75rem] border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/60">
                <CardContent className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-stone-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
  eyebrow="How It Works"
  title="A professional path from project brief to completed work"
  description="The Monumentalis process is built to reduce friction for the client while preserving artistic quality, production control, technical clarity, and reliable delivery."
/>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">{step.number}</div>
              <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
  eyebrow="Selected Work"
  title="Selected Works & Signature Commissions"
  description="A curated selection of monumental sculpture, architectural art, and bespoke commissions developed for public spaces, institutions, and high-end environments. Each project reflects a commitment to artistic integrity, technical precision, and lasting impact."
/>
        <Button asChild variant="outline" className="w-full rounded-2xl lg:w-auto">
          <a href="#contact">Request Full Portfolio</a>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm"
          >
            <div className="relative overflow-hidden">
              <Image
  src={item.image}
  alt={`${item.title} - ${item.category} by Monumentalis`}
  width={1200}
  height={675}
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{item.category}</div>
              <h3 className="mt-2 text-xl font-semibold text-stone-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">{item.details}</p>

<a
  href="#contact"
  className="mt-5 inline-flex items-center rounded-2xl border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
>
  Discuss a similar project
</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ArchitectsSection() {
  return (
    <section id="architects" className="bg-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeading
  eyebrow="For Architects & Developers"
  title="Built for clients who need artistic impact without execution chaos"
  description="Monumentalis exists to simplify the inclusion of sculpture and custom art in serious projects. We bridge concept, production, and delivery through a single coordinated structure so the client receives a complete solution without managing multiple disconnected suppliers."
/>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {audiences.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-stone-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl shadow-stone-200/50">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
            The Monumentalis Advantage
          </div>
          <div className="space-y-4">
            {advantages.map((point) => (
              <div key={point} className="flex gap-3 rounded-2xl border border-stone-200 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                <p className="text-sm leading-7 text-stone-700">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-stone-950 p-6 text-white">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">Commercial Approach</div>
<p className="mt-3 text-sm leading-7 text-stone-300">
  Monumentalis operates as a structured coordination layer supported by a curated network of production partners. This model allows clients to access high-quality sculptural execution without the complexity of managing multiple suppliers, ensuring efficiency, clarity, and consistent project outcomes.
</p>
<p>Every project is approached with long-term value, architectural integration, and visual impact in mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const stats = useMemo(
    () => [
      { value: "Single", label: "Point of coordination" },
      { value: "Custom", label: "Solutions for every brief" },
      { value: "Global", label: "Partnership mindset" },
      { value: "End-to-End", label: "Management and delivery" },
    ],
    []
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm"
          >
            <div className="text-3xl font-semibold tracking-tight text-stone-950">{stat.value}</div>
            <div className="mt-2 text-sm leading-7 text-stone-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
  eyebrow="About Monumentalis"
  title="A brand created to stand between architecture, art, and execution"
  description="Monumentalis is a premium art management and sculpture sourcing brand created for projects that require custom-made monuments, memorials, statues, busts, bas-reliefs, plaques, fountains, and artistic architectural elements. The model is designed to connect client vision with the right creative and manufacturing solution through a professional, coordinated delivery system."
/>
          <p className="mt-6 text-base leading-8 text-stone-600">
  The brand is positioned to serve both direct private commissions and larger B2B collaborations with architecture studios, developers, institutions, and project teams that need reliability, presentation quality, and execution clarity.
</p>
        </div>

        <div className="grid gap-6">
{[
  {
    icon: Globe2,
    title: "International Project Scope",
    text: "Structured to collaborate with architecture studios, developers, and institutions across Europe and international markets.",
  },
  {
    icon: Building2,
    title: "End-to-End Project Coordination",
    text: "From concept definition to fabrication and installation, each project is managed through a single, structured execution system.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Artistic Solutions",
    text: "Every commission is uniquely developed to match the identity, scale, and ambition of the project environment.",
  },
].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-stone-950 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-stone-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-stone-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-300">
            START A PROJECT
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Discuss your monument, sculpture, memorial, or architectural art project
          </h2>
         <p className="mt-5 max-w-xl text-base leading-8 text-stone-300 md:text-lg">
  Share your project vision, specifications, and requirements. We collaborate with architects, developers, and institutions to design and deliver bespoke sculptural works with precision, clarity, and professional execution.
</p>
<p className="mt-4 max-w-xl text-sm font-medium leading-7 text-stone-400">
  For serious projects only; each inquiry is carefully reviewed before engagement.
</p>

          <div className="mt-8 space-y-4 text-sm text-stone-300">
  <div className="flex items-center gap-3">
    <Mail className="h-5 w-5" />
    <span>project@monumentalis.com</span>
  </div>
  <p className="text-sm leading-7 text-stone-400">
    Serving architects, developers, and institutions across Europe and beyond.
  </p>
</div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          {!submitted ? (
            <form
              className="grid gap-4"
              onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      location: formData.get("location"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
    }),
  });

  if (response.ok) {
    setSubmitted(true);
    form.reset();
  } else {
    alert("Error sending message. Please try again.");
  }
}}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Input name="name"
                  required
                  placeholder="Your name"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
                <Input name="email"
                  required
                  type="email"
                  placeholder="Email address"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input name="company"
                  placeholder="Company / Institution / Studio"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
                <Input name="location"
                  placeholder="Project location"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
              </div>

              <Input name="projectType"
                placeholder="Project type (monument, bust, relief, plaque, fountain, public sculpture, architectural feature)"
                className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
              />

              <Textarea
              name="message"
                required
                placeholder="Please describe your project, style direction, dimensions, material preferences, location, budget range, and desired timeline."
                className="min-h-[180px] rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-stone-300">
                  All inquiries are treated with discretion and handled professionally.
                </p>

{/* CONSENT */}
<div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-stone-300">
  <input
    type="checkbox"
    name="consent"
    required
    id="consent"
    className="mt-1 h-4 w-4 rounded border-stone-300 text-stone-950 focus:ring-stone-950"
  />

  <label htmlFor="consent" className="leading-6">
    By submitting this inquiry, you confirm that you have read and accepted our{" "}
    <a href="/privacy-policy" className="underline hover:text-white">
      Privacy Policy
    </a>{" "}
    and{" "}
    <a href="/terms-and-conditions" className="underline hover:text-white">
      Terms & Conditions
    </a>.
    <span className="block mt-2 text-xs text-stone-400">
      All inquiries are reviewed prior to engagement.
    </span>
  </label>
</div>

                <Button
                  type="submit"
                  className="rounded-2xl bg-white px-6 text-stone-950 hover:bg-stone-200"
                >
                  Request Project Inquiry
                </Button>
              </div>
            </form>
          ) : (
            <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-8">
              <div className="flex items-center gap-3 text-emerald-200">
                <CheckCircle2 className="h-6 w-6" />
                <div className="text-xl font-semibold">Project inquiry received</div>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/90">
                Your message has been received.

Thank you for contacting Monumentalis. We appreciate the opportunity to review your project and will carefully assess the details you provided.

If appropriate, we will follow up to discuss potential directions and next steps.

We look forward to the possibility of working together.
              </p>

              <Button
                variant="outline"
                className="mt-6 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10"
                onClick={() => setSubmitted(false)}
              >
                Send Another Inquiry
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-8">
        
        {/* LEFT SIDE */}
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
            Monumentalis
          </div>
          <p className="mt-2 max-w-sm text-sm text-stone-600">
            Custom Sculpture, Monuments, Memorials and Art Solutions for Architecture and Public Space.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-600">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-stone-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* LEGAL LINKS */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500">
          <a href="/privacy-policy" className="transition hover:text-stone-950">
            Privacy Policy
          </a>
          <a href="/cookie-policy" className="transition hover:text-stone-950">
            Cookies
          </a>
          <a href="/terms-and-conditions" className="transition hover:text-stone-950">
            Terms
          </a>
        </div>

      </div>
    </footer>
  );
}

export default function MonumentalisWebsite() {
  return (
    <div className="min-h-screen bg-white text-stone-950 antialiased">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Services />
      <Process />
      <Portfolio />
      <ArchitectsSection />
      <Metrics />
      <About />
      <Contact />
      <Footer />
    </div>
    
  );
}
