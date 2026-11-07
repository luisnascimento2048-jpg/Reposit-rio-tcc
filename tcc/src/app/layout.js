import "./globals.css";

export const metadata = {
  title: "Pixel Art",
  description: "Tela de pixel art interativa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
