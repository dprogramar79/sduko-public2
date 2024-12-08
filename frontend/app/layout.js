import localFont from "next/font/local";
import "./globals.css";
import "../static/external-css/bootstrap.min816e.css"
import "../static/css/head-foot816e.css"
import "../static/css/home-layout816e.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Adult Dating - Post Classified Ads in India - Sduko",
  description: "Sduko is a free adult classified ad portal for dating and sex services in India. Search or post your sex services or dating services in India through fresh adult classified ads.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
