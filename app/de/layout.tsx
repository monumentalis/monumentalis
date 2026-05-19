import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://monumentalis.com"),

  title: "Monumentale Skulptur & Architekturkunst | Monumentalis",

  description:
    "Monumentalis konzipiert, koordiniert und realisiert monumentale Skulpturen, Denkmäler, Gedenkwerke und architektonische Kunstlösungen für Architekten, Projektentwickler und Institutionen.",

  keywords: [
    "monumentale Skulptur",
    "Architekturkunst",
    "Skulptur nach Maß",
    "Denkmal",
    "Gedenkwerk",
    "öffentliche Skulptur",
    "Kunstintegration",
    "Skulptur für Architekten",
    "maßgefertigte Statue",
    "Porträtbüste",
    "architektonisches Relief",
    "Brunnenskulptur",
    "Kunst im öffentlichen Raum",
    "Koordination von Kunstprojekten",
  ],

  openGraph: {
    title: "Monumentalis | Monumentale Skulptur & Architekturkunst",
    description:
      "Monumentale Skulpturen, Denkmäler, Gedenkwerke und maßgefertigte Kunstlösungen für Architektur, öffentliche Räume und institutionelle Projekte.",
    url: "https://monumentalis.com/de",
    siteName: "Monumentalis",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Monumentale Skulptur und Architekturkunst von Monumentalis",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Monumentalis | Monumentale Skulptur & Architekturkunst",
    description:
      "Monumentale Skulpturen, Denkmäler und maßgefertigte Kunstlösungen für Architekten, Projektentwickler und Institutionen.",
    images: ["/images/hero.png"],
  },

  alternates: {
    canonical: "https://monumentalis.com/de",
    languages: {
      en: "https://monumentalis.com",
      de: "https://monumentalis.com/de",
      fr: "https://monumentalis.com/fr",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}