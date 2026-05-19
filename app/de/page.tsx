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
  { label: "Leistungen", href: "#services" },
  { label: "Prozess", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Für Architekten", href: "#architects" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

import Image from "next/image";

const services = [
  {
    icon: Landmark,
    title: "Monumentale Skulptur",
    description:
      "Denkmäler, Gedenkstätten, repräsentative Statuen und großformatige skulpturale Arbeiten für öffentliche, institutionelle und architektonische Räume.",
  },
  {
    icon: Compass,
    title: "Kunstintegration",
    description:
      "Wir unterstützen Projektteams bei der Integration von Skulptur und maßgefertigter Kunst in Architektur-, Landschafts-, Hospitality- und Immobilienprojekte.",
  },
  {
    icon: Factory,
    title: "Produktionssteuerung",
    description:
      "Zugang zu ausgewählten Produktionspartnern für unterschiedliche Materialien, Maßstäbe und Techniken — koordiniert über eine zentrale Verantwortungsstruktur.",
  },
  {
    icon: Hammer,
    title: "Maßgefertigte Ausführung",
    description:
      "Stein, Bronze, Metall, Harz, Mixed Media, Reliefs, Brunnen und individuelle skulpturale Elemente, abgestimmt auf Projektziel und Standort.",
  },
  {
    icon: ShieldCheck,
    title: "Technische Koordination",
    description:
      "Materialauswahl, Maßplanung, Standortabstimmung, Installationsplanung und Ausführungsüberwachung zur Reduzierung von Projektrisiken.",
  },
  {
    icon: Truck,
    title: "Lieferung & Installation",
    description:
      "Koordination von der freigegebenen Konzeption über Produktion und Logistik bis zur fachgerechten Platzierung vor Ort.",
  },
];

const process = [
  {
    number: "01",
    title: "Projektbriefing",
    text: "Sie teilen Konzept, Zeichnungen, Referenzen, Budgetrahmen, Zeitplan und Standortbedingungen mit uns.",
  },
  {
    number: "02",
    title: "Kuratiertes Konzept",
    text: "Wir definieren den passenden künstlerischen und produktionstechnischen Ansatz und entwickeln den geeigneten Realisierungsweg.",
  },
  {
    number: "03",
    title: "Steuerung & Ausführung",
    text: "Wir koordinieren Entwurfsverfeinerung, Fertigung, technische Abstimmung, Qualitätskontrolle und Projektfortschritt.",
  },
  {
    number: "04",
    title: "Lieferung & Installation",
    text: "Wir finalisieren Transport, Installationsplanung und Übergabe — mit einem professionellen Prozess vom ersten Gespräch bis zum fertigen Werk.",
  },
];

const portfolio = [
  {
    title: "Ziviles Gedenkprojekt",
    category: "Gedenkwerk / Öffentlicher Raum",
    details: "Stein- und Bronzekonzept für eine urbane Gedenkinstallation",
    image: "/images/civic_memorial.png",
  },
  {
    title: "Architektonisches Reliefelement",
    category: "Fassade / Architektonische Kunst",
    details: "Integriertes skulpturales Relief für eine dauerhafte Fassadenanwendung",
    image: "/images/relief.png",
  },
  {
    title: "Monumentales Platzobjekt",
    category: "Stadtgestaltung / Landmark",
    details: "Großformatige skulpturale Installation für einen öffentlichen Platz",
    image: "/images/monumental.png",
  },
  {
    title: "Garten- und Brunnenanlage",
    category: "Landschaft / Hospitality",
    details: "Dekorative skulpturale Komposition für den Außenbereich",
    image: "/images/bronze-fountain.png",
  },
  {
    title: "Porträtbüste",
    category: "Porträt / Institutionell",
    details: "Individuell ausgeführte Porträtskulptur für einen formalen Gedenkkontext",
    image: "/images/bust.png",
  },
  {
    title: "Zeitgenössische abstrakte Form",
    category: "Luxusentwicklung / Kunstobjekt",
    details: "Moderne skulpturale Akzentsetzung für hochwertige architektonische Umgebungen",
    image: "/images/abstract.png",
  },
  {
    title: "Religiöse Skulptur und sakrale Kunst",
    category: "Kirche / Sakrale Architektur",
    details: "Individuelle Skulpturen, Statuen und Reliefs für Kirchen und sakrale Räume",
    image: "/images/religious.png",
  },
  {
    title: "Skulptur für Privatresidenzen",
    category: "Luxus / Private Aufträge",
    details: "Individuelle Skulpturen für Villen, Anwesen und private Sammlungen",
    image: "/images/private.png",
  },
  {
    title: "Gedenktafeln und Reliefs",
    category: "Institutionell / Gedenkprojekte",
    details: "Individuelle Tafeln, Basreliefs und Inschriften für öffentliche und private Projekte",
    image: "/images/plaque.png",
  },
  {
    title: "Architektonische Meisterstücke im Modellmaßstab",
    category: "Architektonische Kunst / Modellbau",
    details:
      "Handgefertigtes architektonisches Modell in Bronze, entwickelt für Präsentation, Archivierung und Sammlungszwecke",
    image: "/images/architectural_model.png",
  },
  {
    title: "Historische Repliken und Rekonstruktionen",
    category: "Denkmalpflege / Historische Rekonstruktion",
    details:
      "Originalgetreue Reproduktion historischer Elemente für Restaurierungs- und Erhaltungsprojekte",
    image: "/images/medieval_cannon.png",
  },
  {
    title: "Exklusive Porträtaufträge",
    category: "Bildende Kunst / Individuelle Malerei",
    details:
      "Handgemalte Porträts in repräsentativen Rahmen, geschaffen für private Sammlungen und anspruchsvolle Innenräume",
    image: "/images/luxury_painting.png",
  },
];

const audiences = [
  {
    title: "Architekturbüros",
    text: "Ein flexibler Partner für die Integration maßgefertigter Kunst in konzeptstarke Projekte — ohne zusätzliche Koordinationslast für das Planungsteam.",
  },
  {
    title: "Projektentwickler",
    text: "Eine Möglichkeit, Prestige, Differenzierung und räumliche Identität durch signifikante Kunstwerke und Landmark-Installationen zu erhöhen.",
  },
  {
    title: "Öffentliche Institutionen",
    text: "Eine strukturierte Lösung für Denkmäler, Gedenkprojekte, Erinnerungsorte und dauerhafte Installationen im öffentlichen Raum.",
  },
  {
    title: "Landschafts- & Hospitality-Teams",
    text: "Außenskulpturen, Brunnen und künstlerische Elemente, abgestimmt auf Aufenthaltsqualität, Identität und Wirkung des Projekts.",
  },
];

const advantages = [
  "Ein zentraler, verantwortlicher Partner vom Konzept bis zur finalen Installation",
  "Strukturierte Ausführung, die Fragmentierung reduziert und Projektrisiken minimiert",
  "Zugang zu maßgefertigter Produktion über Materialien, Maßstäbe und künstlerische Disziplinen hinweg",
  "Präzise Koordination nach architektonischen, institutionellen und öffentlichen Anforderungen",
  "Individuelle Lösungen für Landmark-Projekte, öffentliche Räume und hochwertige Umgebungen",
  "Ein Kooperationsmodell für langfristige Partnerschaften und wiederkehrende Aufträge",
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
            <a key={item.label} href={item.href} className="text-sm font-medium text-stone-600 transition hover:text-stone-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/" className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600 transition hover:border-stone-950 hover:text-stone-950">
            EN
          </a>
          <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            DE
          </span>
          <a href="/fr" className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600 transition hover:border-stone-950 hover:text-stone-950">
            FR
          </a>

          <Button asChild className="rounded-2xl px-5">
            <a href="#contact">PROJEKT ANFRAGEN</a>
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
              <a href="/" className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold">
                EN
              </a>
              <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold text-white">
                DE
              </span>
              <a href="/fr" className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold">
                FR
              </a>
            </div>

            <Button asChild className="mt-2 rounded-xl">
              <a href="#contact" onClick={() => setOpen(false)}>
                PROJEKT ANFRAGEN
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
  Kunstintegration für Architektur
</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-stone-950 md:text-7xl">
            Skulpturale Systeme für Architektur
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
            Monumentalis agiert als Ausführungsebene zwischen Architektur, Kunst und Produktion — für anspruchsvolle skulpturale Projekte, die Präzision, Kontrolle und vollständige Koordination erfordern.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-2xl px-6 text-base">
              <a href="#contact">
                Projekt besprechen <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl px-6 text-base">
              <a href="#portfolio">Portfolio ansehen</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
           {[
  ["End-to-End", "Vom Projektbriefing bis zur finalen Installation"],
  ["B2B Ready", "Strukturiert für Architekten, Entwickler und Institutionen"],
  ["Diskret", "Kontrollierte Koordination für anspruchsvolle Projekte"],
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
                  Positionierung
                </div>
                <div className="mt-3 text-2xl font-medium leading-snug">
                  Wir verwandeln skulpturale Kunst in eine präzise geführte, professionell koordinierte Projektlösung.
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
  "Architekturbüros",
  "Projektentwickler",
  "Öffentliche Institutionen",
  "Hospitality & Landschaftsprojekte",
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
  eyebrow="Leistungen"
  title="Ein vollständiges System für die Planung, Steuerung und Realisierung skulpturaler Projekte"
  description="Monumentalis ist für Auftraggeber konzipiert, die mehr benötigen als ein einzelnes Atelier. Wir strukturieren, koordinieren und realisieren maßgefertigte Kunstwerke für Architektur, Gedenkprojekte, öffentliche Räume, sakrale Orte und hochwertige Umgebungen."
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
  eyebrow="Prozess"
  title="Ein professioneller Weg vom Projektbriefing bis zum vollendeten Werk"
  description="Der Monumentalis-Prozess reduziert Komplexität für den Auftraggeber und bewahrt zugleich künstlerische Qualität, Produktionskontrolle, technische Klarheit und zuverlässige Umsetzung."
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
  title="Ausgewählte Projekte und Referenzen"
  description="Ein Überblick über skulpturale Arbeiten, Materialvielfalt und Maßstäbe — von Einzelaufträgen bis hin zu komplexen, architektonisch integrierten Projekten."
/>
        <Button asChild variant="outline" className="w-full rounded-2xl lg:w-auto">
          <a href="#contact">Vollständiges Portfolio anfragen</a>
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
  Ähnliches Projekt besprechen
</a>
            </div>
          </motion.article>
        ))}
           </div>

  <div className="mt-12 max-w-2xl mx-auto border-l border-stone-300 pl-6">
  <p className="text-sm leading-7 text-stone-600">
    Jede Arbeit wird projektspezifisch entwickelt und entsprechend den Anforderungen von Standort, Maßstab und architektonischem Kontext realisiert.
  </p>

  <p className="mt-4 text-xs tracking-[0.2em] text-stone-400 uppercase">
    Vertrauliche Projekte werden nicht öffentlich dargestellt
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
  eyebrow="Für Architekten & Entwickler"
  title="Für Projekte, die künstlerische Wirkung ohne Ausführungschaos benötigen"
  description="Monumentalis vereinfacht die Integration von Skulptur und maßgefertigter Kunst in anspruchsvolle Projekte. Wir verbinden Konzept, Produktion und Lieferung in einer koordinierten Struktur, damit Auftraggeber eine vollständige Lösung erhalten — ohne mehrere voneinander getrennte Anbieter steuern zu müssen."
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
            Der Monumentalis-Vorteil
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
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">Kommerzieller Ansatz</div>
<p className="mt-3 text-sm leading-7 text-stone-300">
  Monumentalis agiert als strukturierte Koordinationsebene, unterstützt durch ein kuratiertes Netzwerk von Produktionspartnern. Dieses Modell ermöglicht hochwertigen skulpturalen Ausführungsspielraum, ohne dass Auftraggeber mehrere Lieferanten, Werkstätten oder Kommunikationsstränge selbst steuern müssen.
</p>
<p>Jedes Projekt wird mit Blick auf langfristigen Wert, architektonische Integration und visuelle Wirkung entwickelt.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
const stats = useMemo(
  () => [
    { value: "Zentral", label: "Koordination aus einer Hand" },
    { value: "Individuell", label: "Lösungen für jedes Projekt" },
    { value: "International", label: "Zusammenarbeit über Märkte hinweg" },
    { value: "End-to-End", label: "Von Konzept bis Installation" },
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
    eyebrow="Über Monumentalis"
    title="Eine strukturierte Verbindung zwischen Kunst, Architektur und Ausführung"
    description="Monumentalis wurde gegründet, um die Lücke zwischen künstlerischer Vision und professioneller Umsetzung zu schließen. Wir agieren als koordinierende Instanz zwischen Auftraggebern, Künstlern und Produktionspartnern — mit Fokus auf Kontrolle, Präzision und langfristige Qualität."
  />

  <p className="mt-6 text-base leading-8 text-stone-600">
    Anstatt als einzelnes Atelier zu agieren, strukturiert Monumentalis den gesamten Prozess von der Konzeption bis zur Installation. Dieses Modell ermöglicht Zugang zu unterschiedlichen Materialien, Maßstäben und künstlerischen Ausdrucksformen, während gleichzeitig eine zentrale Verantwortung und klare Projektführung gewährleistet wird.
  </p>

  <p className="mt-4 text-base leading-8 text-stone-600">
    Für ausgewählte Projekte bieten wir zudem diskrete Koordination im Namen unserer Auftraggeber. Dies ist insbesondere relevant für öffentliche Persönlichkeiten, institutionelle Projekte oder sensible Aufträge, bei denen Vertraulichkeit, Preisstabilität und professionelle Distanz erforderlich sind.
  </p>

  <p className="mt-6 text-sm uppercase tracking-[0.2em] text-stone-400">
    Diskretion. Struktur. Ausführung.
  </p>
</div>

        <div className="grid gap-6">
{[
  {
  icon: Globe2,
  title: "Internationale Projektreichweite",
  text: "Strukturiert für die Zusammenarbeit mit Architekturbüros, Projektentwicklern und Institutionen in Europa und internationalen Märkten.",
},
{
  icon: Building2,
  title: "End-to-End Projektkoordination",
  text: "Von der Konzeptdefinition bis zur Fertigung und Installation wird jedes Projekt über eine zentrale, strukturierte Ausführungsebene gesteuert.",
},
{
  icon: Sparkles,
  title: "Individuelle künstlerische Lösungen",
  text: "Jeder Auftrag wird projektspezifisch entwickelt und an Identität, Maßstab und Anspruch des jeweiligen Umfelds angepasst.",
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
            PROJEKT ANFRAGEN
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Besprechen Sie Ihr Denkmal-, Skulptur- oder Architekturkunstprojekt
          </h2>
         <p className="mt-5 max-w-xl text-base leading-8 text-stone-300 md:text-lg">
  Teilen Sie uns Ihre Projektvision, Anforderungen und wichtigsten Eckdaten mit. Wir prüfen Ihre Anfrage sorgfältig und melden uns mit einer strukturierten Rückmeldung.
</p>
<p className="mt-4 max-w-xl text-sm font-medium leading-7 text-stone-400">
  Für anspruchsvolle Projekte; jede Anfrage wird vor einer möglichen Zusammenarbeit sorgfältig geprüft.
</p>

          <div className="mt-8 space-y-4 text-sm text-stone-300">
  <div className="flex items-center gap-3">
    <Mail className="h-5 w-5" />
    <span>project@monumentalis.com</span>
  </div>
  <p className="text-sm leading-7 text-stone-400">
    Für Architekten, Entwickler und Institutionen in Europa und darüber hinaus.
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
                  placeholder="Ihr Name"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
                <Input name="email"
                  required
                  type="email"
                  placeholder="E-Mail-Adresse"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input name="company"
                  placeholder="Unternehmen / Institution / Studio"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
                <Input name="location"
                  placeholder="Projektstandort"
                  className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
                />
              </div>

              <Input name="projectType"
                placeholder="Projektart (Denkmal, Büste, Relief, Plakette, Brunnen, öffentliche Skulptur, architektonisches Element)"
                className="h-12 rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
              />

              <Textarea
              name="message"
                required
                placeholder="Bitte beschreiben Sie Ihr Projekt, Stilrichtung, Maße, Materialvorstellungen, Standort, Budgetrahmen und gewünschten Zeitplan."
                className="min-h-[180px] rounded-xl border-white/10 bg-white text-stone-950 placeholder:text-stone-500"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-stone-300">
                  Alle Anfragen werden diskret geprüft und professionell bearbeitet.
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
    Mit dem Absenden dieser Anfrage bestätigen Sie, dass Sie unsere{" "}
    <a href="/de/privacy-policy" className="underline hover:text-white">
      Datenschutzerklärung
    </a>{" "}
    und{" "}
    <a href="/de/terms-and-conditions" className="underline hover:text-white">
      Allgemeinen Geschäftsbedingungen
    </a>{" "}
    gelesen und akzeptiert haben.
    <span className="mt-2 block text-xs text-stone-400">
      Alle Anfragen werden vor einer möglichen Zusammenarbeit sorgfältig geprüft.
    </span>
  </label>
</div>

<Button
  type="submit"
  className="rounded-2xl bg-white px-6 text-stone-950 hover:bg-stone-200"
>
  Projektanfrage senden
</Button>
              </div>
            </form>
          ) : (
            <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-8">
              <div className="flex items-center gap-3 text-emerald-200">
                <CheckCircle2 className="h-6 w-6" />
                <div className="text-xl font-semibold">Projektanfrage erhalten</div>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/90">
  Vielen Dank für Ihre Anfrage. Ihr Projekt wurde erfolgreich übermittelt und wird von Monumentalis sorgfältig geprüft.
  <br /><br />
  Wenn Ihre Anfrage zu unserem Leistungsumfang und unserer Arbeitsweise passt, melden wir uns mit den nächsten Schritten.
  <br /><br />
  Vertrauliche Projekte werden mit besonderer Diskretion behandelt.
</p>

              <Button
                variant="outline"
                className="mt-6 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10"
                onClick={() => setSubmitted(false)}
              >
                Erneute Anfrage senden
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
  Maßgefertigte Skulpturen, Denkmäler, Gedenkwerke und Kunstlösungen für Architektur und öffentlichen Raum.
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
          <a href="/de/privacy-policy" className="transition hover:text-stone-950">
  Datenschutzerklärung
</a>
<a href="/de/cookie-policy" className="transition hover:text-stone-950">
  Cookies
</a>
<a href="/de/terms-and-conditions" className="transition hover:text-stone-950">
  Bedingungen
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
