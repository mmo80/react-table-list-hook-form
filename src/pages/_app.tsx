import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "~/components/ui/toaster"

import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Component {...pageProps} />
      <Toaster />
    </main>
  );
};

export default MyApp;
