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
  title: "팔자언니 | 사주 × 웹툰 × AI × MBTI × 연애",
  description: "야, 앉아봐라. 니 팔자 한번 봐줄게.",
  applicationName: "팔자언니",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8b1e3a",
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
