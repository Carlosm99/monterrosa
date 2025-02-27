import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: { default: "Carlos Monterrosa", template: "%s | Carlos Monterrosa" },
  description: "Software developer",
  openGraph: {
    title: "Carlos Monterrosa",
    description: "Software developer",
    siteName: "carlos monterrosa",
    url: "https://monterrosa.vercel.app",
    images: [
      {
        url: "https://monterrosa.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Carlos Monterrosa",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className="bg-black">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#151515",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "0.75rem",
              padding: "0.75rem",
              fontSize: "0.875rem",
            },
            success: {
              iconTheme: {
                primary: "#333333",
                secondary: "#FFFFFF",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
