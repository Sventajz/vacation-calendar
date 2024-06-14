"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const sheet = typeof window === "undefined" ? new ServerStyleSheet() : null;

  useServerInsertedHTML(() => {
    return sheet ? sheet.getStyleElement() : null;
  });

  return (
    <html lang="en">
      <head>{sheet ? sheet.getStyleElement() : null}</head>
      <body className={inter.className}>
        {sheet ? (
          <StyleSheetManager sheet={sheet.instance}>
            {children}
          </StyleSheetManager>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
