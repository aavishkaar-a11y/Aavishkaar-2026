import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Popup from "@/components/ui/Popup"; // ✅ ADD THIS

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-transparent cursor-none">
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar />

      {/* ✅ MOVING ANNOUNCEMENT BAR */}
      <Popup />

      {/* Main Content */}
      <main className="flex-1 relative z-[2]">
        {children}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}