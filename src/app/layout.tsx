import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ApolloProvider from "@/components/apollo/ApolloProvider";
import { Provider } from "@/components/cui/provider";
import { Toaster } from "@/components/cui/toaster";
import SessionProvider from "@/components/session/SessionProvider";
import Navbar from "@/components/ui/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TekeverTV",
  description: "Information about all your favourite TV shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ApolloProvider>
          <SessionProvider>
            <Provider>
              <Navbar />
              {children}
              <Toaster />
            </Provider>
          </SessionProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
