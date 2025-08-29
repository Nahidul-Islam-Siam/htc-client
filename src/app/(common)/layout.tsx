import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
// import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import "../globals.css";
import { Toaster } from "sonner";

import { Chakra_Petch } from "next/font/google";

// Add Chakra Petch font
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${chakra.variable} font-chakra`}>
      <NextUiProvider>
        <ReduxProvider>
          <>
            <div className="flex flex-col max-w-[80w]">
              <Navbar />
              <main className="flex-grow mt-[66px]">{children}</main>
              <Footer />
            </div>
            {/* <ScrollToTopButton /> */}
            <Toaster />
          </>
        </ReduxProvider>
      </NextUiProvider>
    </div>
  );
}
