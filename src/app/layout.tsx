import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SITE.SET",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SITE.SET",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://site-blog-khaki-chi.vercel.app/og-image.jpg",
    siteName: "SITE.SET",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://site-blog-khaki-chi.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "SITE.SET",
      },
    ],
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
