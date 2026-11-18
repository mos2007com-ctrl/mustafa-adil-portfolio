import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mustafa Adil | ICT · AI · Automation",
  description:
    "The personal portfolio of Mustafa Adil — Information and Communications Technology, AI-assisted development, and workflow automation.",
  applicationName: "Mustafa Adil Portfolio",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
