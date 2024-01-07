import { draftMode } from "next/headers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import VisualEditing from "@/components/VisualEditing";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Keswick",
  description: "Ryan Keswick's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
