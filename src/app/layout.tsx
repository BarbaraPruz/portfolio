import type { Metadata } from "next";
import { Montserrat} from "next/font/google"
import "./globals.css";

import { Header } from "@/components/header";

const montserrat = Montserrat({subsets: ['latin']})
export const metadata: Metadata = {
  title: "barbara",
  description: "barbara prusiewicz web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <Header />
        <div className="max-w-screen-xl px-4 mx-auto">
        <main>{children}</main>
      <footer>footer here
      </footer>
      </div>
      </body>
    </html>
  );
}
