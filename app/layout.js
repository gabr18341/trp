import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const sary = localFont({
  src: "../public/fonts/Sary-Regular.woff",
})

export const metadata = {
  title: "TRP",
  description: "TRP ",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={` ${sary.className} antialiased`}
      >
        <header>
          <Header />
        </header>
        {children}
        <footer>
        </footer>
      </body>
    </html>
  );
}
