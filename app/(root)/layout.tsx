import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/Navbar/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RightSidebar from "@/components/shared/RightSidebar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <SpeedInsights />
      <Analytics />
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
