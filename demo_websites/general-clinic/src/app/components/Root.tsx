import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileStickyCTA } from "./MobileStickyCTA";

export function Root() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
