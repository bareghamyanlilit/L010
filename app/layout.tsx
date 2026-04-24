import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Արամ և Սյունէ",
  description: "Արամ և Սյունէ",
  openGraph: {
    title: "Արամի և Սյունէի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://site-up-l010.vercel.app",
    siteName: "Արամ և Սյունէ",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
