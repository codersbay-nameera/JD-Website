import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";
import { defaultMetadata } from "@/lib/seo";
import {
  createOrganizationSchema,
  createWebSiteSchema,
} from "@/lib/schema";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html
      lang={siteConfig.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd
          data={[createOrganizationSchema(), createWebSiteSchema()]}
        />
        {children}
      </body>
    </html>
  );
}
