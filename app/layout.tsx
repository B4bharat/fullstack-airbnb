// ---------- Libraries -------------
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

// ---------- Components -------------
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

// ---------- Server Data -------------
import getCurrentUser from "./actions/getCurrentUser";

// ---------- Styles --------------
import "./globals.css";
import RentModal from "./components/modals/RentModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
