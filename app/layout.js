import localFont from "next/font/local";
import "./globals.css";
import { ConfigProvider } from "antd";

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
  title: "Dieza Digital - Jasa Pembuatan Website",
  description: "Jasa Pembuatan Website dan Aplikasi Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-50`}
      >
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#ffd800",
              borderRadius: 30,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
