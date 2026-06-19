import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ASCENRIX | Built to Ascend",
  description:
    "Salesforce, Cybersecurity, Cloud, AI & Digital Transformation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
