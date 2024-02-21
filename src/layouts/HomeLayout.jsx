import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const HomeLayout = ({ children }) => (
  <section className="flex flex-col min-h-screen mx-auto">
    <Navbar />
    {children}
    <Footer />
  </section>
);
