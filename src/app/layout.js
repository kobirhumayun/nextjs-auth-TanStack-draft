import Providers from "./providers";

export const revalidate = 0;        // ensure dynamic where needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
