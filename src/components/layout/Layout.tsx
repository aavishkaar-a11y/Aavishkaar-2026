import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-background cursor-none">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
