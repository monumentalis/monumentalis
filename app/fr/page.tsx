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
  { label: "Processus", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Architectes", href: "#architects" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

<a href="/de">DE</a>

import Image from "next/image";

const services = [
  {
    icon: Landmark,
    title: "Sculpture monumentale",
    description:
      "Monuments, mémoriaux, statues commémoratives et œuvres sculpturales de grande échelle pour espaces publics, institutionnels et architecturaux.",
  },
  {
    icon: Compass,
    title: "Intégration artistique",
    description:
      "Nous accompagnons l’intégration de sculptures et d’œuvres sur mesure dans des projets d’architecture, de paysage, d’hôtellerie et d’immobilier.",
  },
  {
    icon: Factory,
    title: "Pilotage de production",
    description:
      "Accès à des partenaires de production sélectionnés selon les matériaux, les échelles et les techniques, avec une coordination centralisée.",
  },
  {
    icon: Hammer,
    title: "Réalisation sur mesure",
    description:
      "Pierre, bronze, métal, résine, techniques mixtes, reliefs, fontaines et éléments sculpturaux adaptés aux exigences du projet.",
  },
  {
    icon: ShieldCheck,
    title: "Coordination technique",
    description:
      "Sélection des matériaux, planification dimensionnelle, coordination du site, installation et supervision afin de réduire les risques du projet.",
  },
  {
    icon: Truck,
    title: "Livraison & installation",
    description:
      "Coordination complète, du concept validé à la production, la logistique et la mise en place finale sur site.",
  },
];

const process = [
  {
    number: "01",
    title: "Brief du projet",
    text: "Vous partagez votre concept, vos références, vos exigences, votre budget et votre calendrier.",
  },
  {
    number: "02",
    title: "Orientation structurée",
    text: "Nous définissons l’approche artistique et technique ainsi que le cadre d’exécution du projet.",
  },
  {
    number: "03",
    title: "Production & coordination",
    text: "Nous pilotons le développement, la fabrication, la logistique et l’alignement technique.",
  },
  {
    number: "04",
    title: "Livraison & installation",
    text: "Nous coordonnons le transport, la mise en place et la finalisation du projet.",
  },
];

const portfolio = [
  {
    title: "Mémorial civique",
    category: "Mémorial / Espace public",
    details: "Concept en pierre et bronze pour une installation commémorative urbaine",
    image: "/images/civic_memorial.png",
  },
  {
    title: "Élément de relief architectural",
    category: "Façade / Art architectural",
    details: "Relief sculptural intégré conçu pour une application permanente en façade",
    image: "/images/relief.png",
  },
  {
    title: "Installation monumentale pour place publique",
    category: "Design urbain / Landmark",
    details: "Pièce sculpturale monumentale conçue pour un environnement public",
    image: "/images/monumental.png",
  },
  {
    title: "Ensemble de jardin et fontaine",
    category: "Paysage / Hospitality",
    details: "Composition sculpturale décorative adaptée aux installations extérieures",
    image: "/images/bronze-fountain.png",
  },
  {
    title: "Buste commémoratif",
    category: "Portrait / Institutionnel",
    details: "Sculpture portrait sur mesure réalisée pour un contexte commémoratif formel",
    image: "/images/bust.png",
  },
  {
    title: "Forme abstraite contemporaine",
    category: "Développement haut de gamme / Art intégré",
    details: "Accent sculptural contemporain pour environnements architecturaux premium",
    image: "/images/abstract.png",
  },
  {
    title: "Sculpture religieuse & art sacré",
    category: "Église / Architecture sacrée",
    details: "Sculptures, statues et reliefs sur mesure pour églises et espaces sacrés",
    image: "/images/religious.png",
  },
  {
    title: "Sculpture pour propriété privée",
    category: "Luxe / Commande privée",
    details: "Sculptures personnalisées pour villas, domaines et collections privées",
    image: "/images/private.png",
  },
  {
    title: "Plaques commémoratives & reliefs",
    category: "Institutionnel / Mémorial",
    details: "Plaques, bas-reliefs et inscriptions sur mesure pour projets publics et privés",
    image: "/images/plaque.png",
  },
  {
    title: "Maquettes architecturales d’exception",
    category: "Art architectural / Maquette",
    details:
      "Maquette architecturale réalisée à la main en bronze, conçue pour présentation, transmission et collection",
    image: "/images/architectural_model.png",
  },
  {
    title: "Répliques historiques & médiévales",
    category: "Restauration patrimoniale / Reconstruction historique",
    details:
      "Reproduction fidèle d’éléments historiques pour projets de restauration et de préservation",
    image: "/images/medieval_cannon.png",
  },
  {
    title: "Portraits de prestige",
    category: "Beaux-arts / Peinture sur mesure",
    details:
      "Portraits peints à la main présentés dans des cadres raffinés pour résidences privées et intérieurs distingués",
    image: "/images/luxury_painting.png",
  },
];

const audiences = [
  {
    title: "Agences d’architecture",
    text: "Un partenaire flexible pour intégrer des œuvres sur mesure dans des projets conceptuels sans alourdir la coordination des équipes de conception.",
  },
  {
    title: "Promoteurs immobiliers",
    text: "Une manière de renforcer le prestige, la différenciation et l’impact des projets grâce à des œuvres emblématiques et installations monumentales.",
  },
  {
    title: "Institutions publiques",
    text: "Une solution structurée pour mémoriaux, monuments, commandes commémoratives et installations civiques permanentes.",
  },
  {
    title: "Paysage & hospitality",
    text: "Sculptures extérieures, fontaines et éléments artistiques adaptés à l’expérience des visiteurs, à la valeur des espaces publics et à l’identité du projet.",
  },
];

const advantages = [
  "Un interlocuteur unique et responsable du concept jusqu’à l’installation finale",
  "Une exécution structurée réduisant la fragmentation et les risques du projet",
  "Accès à une fabrication sur mesure à travers différents matériaux, échelles et disciplines artistiques",
  "Une coordination précise alignée sur les standards architecturaux, institutionnels et civiques",
  "Des solutions adaptées aux projets emblématiques, espaces publics et environnements à forte valeur",
  "Un modèle de collaboration conçu pour des partenariats durables et des commandes récurrentes",
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
          <a href="/" className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600 transition hover:border-stone-950 hover:text-stone-950">
            EN
          </a>
          <a href="/de" className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600 transition hover:border-stone-950 hover:text-stone-950">
            DE
          </a>
          <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            FR
          </span>

          <Button asChild className="rounded-2xl px-5">
            <a href="#contact">DISCUTER UN PROJET</a>
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
              <a href="/" className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold">EN</a>
              <a href="/de" className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold">DE</a>
              <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold text-white">FR</span>
            </div>

            <Button asChild className="mt-2 rounded-xl">
              <a href="#contact" onClick={() => setOpen(false)}>
                DISCUTER UN PROJET
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
            Intégration artistique pour l’architecture
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-stone-950 md:text-7xl">
            Systèmes sculpturaux pour l’architecture
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
            Monumentalis intervient comme une structure d’exécution entre architecture, art et production — pour des projets sculpturaux exigeant précision, contrôle et coordination complète.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-2xl px-6 text-base">
              <a href="#contact">Discuter un projet</a>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-2xl px-6 text-base">
              <a href="#portfolio">Voir le portfolio</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["De bout en bout", "Du brief initial à l’installation finale"],
              ["Approche B2B", "Structuré pour architectes, promoteurs et institutions"],
              ["Discrétion", "Coordination maîtrisée pour projets sensibles"],
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
              alt="Sculpture monumentale intégrée dans un projet architectural"
              width={1200}
              height={900}
              priority
              className="h-[560px] w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/35 to-transparent p-8 text-white">
              <div className="max-w-lg">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-200">
                  Positionnement
                </div>

                <div className="mt-3 text-2xl font-medium leading-snug">
                  Nous transformons la sculpture en un système de projet structuré et professionnellement coordonné.
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
            "Agences d’architecture",
            "Promoteurs",
            "Institutions publiques",
            "Paysage & hôtellerie",
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
  title="Un système complet pour structurer, piloter et réaliser des projets sculpturaux"
  description="Monumentalis s’adresse aux clients qui recherchent plus qu’un atelier. Nous structurons, coordonnons et réalisons des œuvres sur mesure pour l’architecture, les mémoriaux, les espaces publics, les lieux sacrés et les environnements haut de gamme."
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
  eyebrow="Processus"
  title="Un parcours structuré, du brief initial à la réalisation finale"
  description="Le processus Monumentalis est conçu pour réduire la complexité côté client, tout en garantissant qualité artistique, contrôle de production, clarté technique et fiabilité d’exécution."
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
  eyebrow="Portfolio"
  title="Projets sélectionnés et références"
  description="Aperçu de réalisations sculpturales, de matériaux et d’échelles — des commandes individuelles aux projets intégrés à l’architecture."
/>
        <Button asChild variant="outline" className="w-full rounded-2xl lg:w-auto">
          <a href="#contact">Demander le portfolio complet</a>
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
  Discuter un projet similaire
</a>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-12 max-w-2xl mx-auto border-l border-stone-300 pl-6">
  <p className="text-sm leading-7 text-stone-600">
    Chaque projet est développé spécifiquement selon le contexte, l’échelle et les exigences architecturales.
  </p>

  <p className="mt-4 text-xs tracking-[0.2em] text-stone-400 uppercase">
    Certains projets sont traités de manière confidentielle
  </p>
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
  eyebrow="Pour architectes & promoteurs"
  title="Conçu pour les clients qui recherchent un impact artistique sans complexité d’exécution"
  description="Monumentalis simplifie l’intégration de sculptures et d’œuvres sur mesure dans des projets exigeants. Nous relions conception, production et livraison à travers une structure coordonnée unique, afin d’offrir une solution complète sans multiplier les intervenants."
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
            L’avantage Monumentalis
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
  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
    Approche opérationnelle
  </div>

  <p className="mt-3 text-sm leading-7 text-stone-300">
    Monumentalis fonctionne comme une structure de coordination appuyée par un réseau sélectionné de partenaires de production. Ce modèle permet d’accéder à une exécution sculpturale haut de gamme sans la complexité liée à la gestion de multiples fournisseurs, tout en garantissant clarté, efficacité et cohérence du projet.
  </p>

  <p className="mt-4 text-sm leading-7 text-stone-300">
    Chaque projet est développé avec une vision à long terme, une intégration architecturale maîtrisée et un fort impact visuel.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const stats = useMemo(
() => [
  { value: "Unique", label: "Structure de coordination" },
  { value: "Sur mesure", label: "Solutions adaptées à chaque projet" },
  { value: "International", label: "Approche orientée partenariat" },
  { value: "De A à Z", label: "Pilotage et livraison" },
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
  eyebrow="À propos de Monumentalis"
  title="Une structure conçue à l’intersection de l’architecture, de l’art et de l’exécution"
  description="Monumentalis est une structure premium de coordination artistique et sculpturale dédiée aux projets nécessitant des monuments, mémoriaux, statues, bustes, bas-reliefs, plaques, fontaines et éléments architecturaux sur mesure. Le modèle relie la vision du client à la solution créative et de production la plus adaptée à travers un système d’exécution professionnel et coordonné."
/>
 <p className="mt-6 text-base leading-8 text-stone-600">
  Monumentalis accompagne aussi bien des commandes privées directes que des collaborations B2B avec des agences d’architecture, promoteurs, institutions et équipes de projet recherchant fiabilité, qualité de présentation et clarté d’exécution.
</p>
        </div>

        <div className="grid gap-6">
{[
  {
  icon: Globe2,
  title: "Portée internationale",
  text: "Structuré pour collaborer avec des agences d’architecture, promoteurs et institutions en Europe et sur les marchés internationaux.",
},
{
  icon: Building2,
  title: "Coordination de projet de A à Z",
  text: "De la définition du concept à la fabrication et à l’installation, chaque projet est piloté à travers un système d’exécution structuré.",
},
{
  icon: Sparkles,
  title: "Solutions artistiques sur mesure",
  text: "Chaque commande est développée spécifiquement afin de correspondre à l’identité, à l’échelle et à l’ambition du projet.",
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
            DISCUTER UN PROJET
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
  Discutons de votre projet sculptural, monumental ou architectural
</h2>

<p className="mt-5 max-w-xl text-base leading-8 text-stone-300 md:text-lg">
  Partagez votre vision, vos exigences et les spécificités de votre projet. Monumentalis accompagne architectes, promoteurs et institutions dans la conception et la réalisation d’œuvres sculpturales sur mesure avec précision, clarté et coordination professionnelle.
</p>

<p className="mt-4 max-w-xl text-sm font-medium leading-7 text-stone-400">
  Pour projets sérieux uniquement ; chaque demande est étudiée avec attention avant toute collaboration.
</p>

          <div className="mt-8 space-y-4 text-sm text-stone-300">
  <div className="flex items-center gap-3">
    <Mail className="h-5 w-5" />
    <span>project@monumentalis.com</span>
  </div>
<p className="text-sm leading-7 text-stone-400">
  Au service des architectes, promoteurs et institutions en Europe et à l’international.
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
    alert("Une erreur est survenue lors de l’envoi du message. Veuillez réessayer.");
  }
}}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Input name="name"
                  required
                  placeholder="Votre nom"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
                <Input name="email"
                  required
                  type="email"
                  placeholder="Adresse e-mail"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input name="company"
                  placeholder="Entreprise / Institution / Agence"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
                <Input name="location"
                  placeholder="Localisation du projet"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
              </div>

              <Input name="projectType"
                placeholder="Type de projet (monument, buste, relief, plaque, fontaine, sculpture publique, élément architectural)"
                className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
              />

              <Textarea
              name="message"
                required
                placeholder="Veuillez décrire votre projet, la direction artistique souhaitée, les dimensions, les matériaux envisagés, le lieu d’installation, le budget estimatif et le calendrier souhaité."
                className="min-h-[180px] rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-stone-300">
                  Toutes les demandes sont traitées avec discrétion et dans un cadre professionnel.
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
  En soumettant cette demande, vous confirmez avoir lu et accepté notre{" "}
  <a href="/privacy-policy" className="underline hover:text-white">
    Politique de confidentialité
  </a>{" "}
  ainsi que nos{" "}
  <a href="/terms-and-conditions" className="underline hover:text-white">
    Conditions générales
  </a>.
  
  <span className="block mt-2 text-xs text-stone-400">
    Chaque demande est examinée avant toute prise de contact.
  </span>
</label>
</div>

                <Button
                  type="submit"
                  className="rounded-2xl bg-white px-6 text-stone-950 hover:bg-stone-200"
                >
                  Soumettre une demande de projet
                </Button>
              </div>
            </form>
          ) : (
            <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-8">
              <div className="flex items-center gap-3 text-emerald-200">
                <CheckCircle2 className="h-6 w-6" />
                <div className="text-xl font-semibold">Demande de projet reçue</div>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/90">
                Votre demande a bien été reçue.

Merci d’avoir contacté Monumentalis. Nous apprécions l’opportunité d’étudier votre projet et examinerons attentivement les informations transmises.

Si votre demande correspond à notre champ d’intervention, nous reviendrons vers vous afin d’échanger sur les orientations possibles et les prochaines étapes.

Nous nous réjouissons de la possibilité de collaborer avec vous.
              </p>

              <Button
                variant="outline"
                className="mt-6 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10"
                onClick={() => setSubmitted(false)}
              >
                Soumettre une autre demande
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
            Sculpture sur mesure, monuments, mémoriaux et solutions artistiques pour l’architecture et l’espace public.
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
            Politique de confidentialité
          </a>
          <a href="/cookie-policy" className="transition hover:text-stone-950">
            Cookies
          </a>
          <a href="/terms-and-conditions" className="transition hover:text-stone-950">
            Conditions générales
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
