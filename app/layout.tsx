import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
export const metadata: Metadata = {
  metadataBase: new URL("https://monumentalis.com"),
  title: "Monumental Sculpture & Architectural Art Integration | Monumentalis",
  description:
    "Monumentalis delivers custom monuments, memorials, architectural sculpture, public art and sculptural project management for architects, developers and institutions.",
  keywords: [
    "monumental sculpture",
    "architectural art",
    "custom monuments",
    "memorial sculpture",
    "public art",
    "architectural sculpture",
    "sculpture for architects",
    "custom statues",
    "bronze sculpture",
    "art integration",
  ],
  openGraph: {
    title: "Monumentalis | Monumental Sculpture & Architectural Art Integration",
    description:
      "Custom sculptures, monuments, memorials and architectural art solutions for landmark projects, public spaces and institutions.",
    url: "https://monumentalis.com",
    siteName: "Monumentalis",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Monumental sculpture and architectural art by Monumentalis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monumentalis | Monumental Sculpture & Architectural Art Integration",
    description:
      "Custom sculptures, monuments, memorials and architectural art solutions for public spaces and architecture.",
    images: ["/images/hero.png"],
  },
    alternates: {
    canonical: "https://monumentalis.com",
    languages: {
      en: "https://monumentalis.com",
      de: "https://monumentalis.com/de",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Monumentalis",
        url: "https://monumentalis.com",
        description:
          "Custom monumental sculpture, memorials, public art and architectural art integration for architects, developers and institutions.",
        areaServed: "Worldwide",
        serviceType: [
          "Monumental Sculpture",
          "Memorial Sculpture",
          "Architectural Art Integration",
          "Public Art Project Management",
          "Custom Sculpture Fabrication",
        ],
        email: "project@monumentalis.com",
        image: "https://monumentalis.com/images/hero.png",
        brand: {
          "@type": "Brand",
          name: "Monumentalis",
        },
      }),
    }}
  />

  {children}
  <CookieBanner />
</body>
    </html>
  );
}
