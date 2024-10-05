import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import ComboCart from "@/components/ComboCart";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Pizza por combo",
    template: "%s | Pizza por combo",
  },
  description: "Local pizza's shop by combo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <div className="bg-bgTop rounded-md m-2.5">
          <header className="px-3 sm:px-0 sm:text-center text-base text-gray-600 font-semibold py-3 flex justify-between items-center ">
            <nav className="uppercase">Pizza por combo</nav>
            <ComboCart />
          </header>

          {children}
          <footer className="text-center text-base text-gray-600 font-semibold py-2">
            Created @bymarcant - {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
