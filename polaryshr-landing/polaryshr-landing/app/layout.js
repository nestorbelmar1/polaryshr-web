export const metadata = {
  title: "Polaryshr | Compensaciones y Head Hunting",
  description: "Landing page de Polaryshr HR Consulting."
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
