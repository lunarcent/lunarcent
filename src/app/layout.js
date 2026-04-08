import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/system/navbar";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata = {
  title: "Lunarcent Studios | Phases ahead in technology",
  description: "Lunarcent Studios builds customer-centric, scalable, and secure software. We guide your tech through every phase—from architectural design to seamless deployment.",
  keywords: "Lunarcent Studios, custom software development, SaaS solutions, scalable web apps, secure systems, architectural design, deployment",
  author: "Lunarcent Studios",
  openGraph: {
    title: "Lunarcent Studios | Phases ahead in technology",
    description: "Lunarcent Studios builds customer-centric, scalable, and secure software. We guide your tech through every phase—from architectural design to seamless deployment.",
    url: "https://lunarcent.vercel.app",
    siteName: "Lunarcent Studios",
    images: [
      {
        url: "https://lunarcent.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lunarcent Studios - Phases ahead in technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
