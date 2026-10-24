import type { Metadata, Viewport } from "next";
import { Black_Han_Sans, Gaegu, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const display = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bubble = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-bubble",
  display: "swap",
});

const body = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "팔자언니 | 대구 MZ 무당언니",
  description: "대구 MZ 무당언니가 봐주는 내 팔자",
  applicationName: "팔자언니",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b1d52",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${display.variable} ${bubble.variable} ${body.variable} h-full`}
    >
      <body className="min-h-full font-body antialiased">{children}</body>
    </html>
  );
}
