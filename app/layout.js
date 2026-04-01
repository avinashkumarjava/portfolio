import "./globals.css";
import { Inter } from "next/font/google";


/* Load Google Font with Next.js optimization */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/* ===============================
   SEO METADATA
================================ */

export const metadata = {
  title: "Avinash Kushwaha | Software Engineering Team Lead",

  description:
    "Portfolio of Avinash Kushwaha — Software Engineering Team Lead specializing in high-scale fintech systems, payment gateway infrastructure, distributed microservices, and event-driven architectures using Java 21, Spring Boot, Kafka, and MongoDB.",

  keywords: [
    "Avinash Kushwaha",
    "Java Developer",
    "Spring Boot Developer",
    "Fintech Backend Engineer",
    "Payment Gateway Architect",
    "Kafka Microservices",
    "Distributed Systems Engineer",
    "Backend Developer Portfolio"
  ],

  authors: [{ name: "Avinash Kushwaha" }],

  creator: "Avinash Kushwaha",

  metadataBase: new URL("https://avinashkushwaha.dev"),

  openGraph: {
    title: "Avinash Kushwaha | Fintech Backend Engineer",
    description:
      "Explore the portfolio of Avinash Kushwaha — building scalable fintech infrastructure, payment gateways, and distributed microservices.",
    url: "https://avinashkushwaha.dev",
    siteName: "Avinash Kushwaha Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Avinash Kushwaha | Software Engineering Team Lead",
    description:
      "Portfolio showcasing payment gateway architecture, fintech backend systems, and scalable microservices.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ===============================
   VIEWPORT CONFIG (Next.js 16)
================================ */

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C9A227",
};

/* ===============================
   ROOT LAYOUT
================================ */

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} site-body`}>
 
        <div className="site-wrapper">
          {children}
        </div>

      </body>

    </html>
  );
}