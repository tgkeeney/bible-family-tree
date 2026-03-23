import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Lineage \u2014 Biblical Family Tree: Adam to David",
  description:
    "An immersive interactive genealogy exploring the biblical lineage from Adam to King David. Discover the stories of over 150 figures across 20+ generations.",
  keywords: [
    "Bible family tree",
    "biblical genealogy",
    "Adam to David",
    "Genesis genealogy",
    "12 tribes of Israel",
    "biblical lineage",
    "Torah genealogy",
    "Abraham Isaac Jacob",
    "Old Testament family tree",
  ],
  authors: [{ name: "lineage.bible" }],
  metadataBase: new URL("https://lineage.bible"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Lineage \u2014 Biblical Family Tree",
    description:
      "An immersive interactive journey through the biblical genealogy from Adam to King David. 173 figures, 13 lineage branches, 20+ generations.",
    url: "https://lineage.bible",
    siteName: "The Lineage",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lineage \u2014 Biblical Family Tree",
    description:
      "An interactive journey through the biblical genealogy from Adam to King David.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${cormorant.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
