import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"]
})

export const forceStatic = true

export const metadata: Metadata = {
  title: "Writing that Resonates - A Modern Blog",
  description: "Insights on tech, design, creativity and innovation from a digital craftsman who believes in thoughtful storytelling.",
  keywords: ["blog", "technology", "design", "creativity", "innovation"],
  authors: [{ name: "Resonance" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`} 
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
