import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navlinks";
import { Footer } from "../components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Blog",
  description: "A Blog about cars",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full border-0 flex flex-col">
        <Navbar />
        <main className="flex-1 px-12 py-8 sm:px-12 sm:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
