import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Точка притяжения — развитие территорий восточного Крыма",
  description:
    "Проектная экосистема, объединяющая девелопмент, туризм, культуру, производство, медиа и социальные инициативы на востоке Крыма.",
  keywords: [
    "Точка притяжения",
    "развитие территорий",
    "восточный Крым",
    "Керчь",
    "инвестиционные проекты",
    "экотуризм",
  ],
  other: {
    "theme-color": "#081715",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
