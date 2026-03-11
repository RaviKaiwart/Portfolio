import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravi Kumar Kaiwart | Full Stack Developer",
  description: "Portfolio of Ravi Kumar Kaiwart, Full Stack Developer and Hackathon Winner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#121212] text-white selection:bg-white selection:text-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
