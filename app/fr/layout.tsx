import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://monumentalis.com"),

  title: "Sculpture Monumentale & Art Architectural | Monumentalis",

  description:
    "Monumentalis conçoit, coordonne et réalise des sculptures monumentales, mémoriaux, œuvres sur mesure et intégrations artistiques pour architectes, promoteurs et institutions.",

  keywords: [
    "sculpture monumentale",
    "art architectural",
    "sculpture sur mesure",
    "monument commémoratif",
    "mémorial",
    "sculpture publique",
    "intégration artistique",
    "sculpture pour architectes",
    "statue sur mesure",
    "buste commémoratif",
    "relief architectural",
    "fontaine sculpturale",
    "art public",
    "coordination de projet artistique",
  ],

  openGraph: {
    title: "Monumentalis | Sculpture Monumentale & Art Architectural",
    description:
      "Sculptures monumentales, mémoriaux, œuvres sur mesure et solutions artistiques pour l’architecture, l’espace public et les projets institutionnels.",
    url: "https://monumentalis.com/fr",
    siteName: "Monumentalis",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Sculpture monumentale et art architectural par Monumentalis",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Monumentalis | Sculpture Monumentale & Art Architectural",
    description:
      "Sculptures monumentales, mémoriaux et solutions artistiques sur mesure pour architectes, promoteurs et institutions.",
    images: ["/images/hero.png"],
  },

  alternates: {
    canonical: "https://monumentalis.com/fr",
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

export default function FrenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}