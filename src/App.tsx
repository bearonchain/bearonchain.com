import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesCarousel from "./components/ServicesSection";
import DetailedServices from "./components/DetailedSection";
import Pricing from "./components/Pricing";
import BlogSection from "./components/BlogSection"; // Homepage preview
import Blog from "./pages/Blog"; // Blog index page
import Post from "./pages/Post"; // Single blog post page
import ContactForm from "./components/ContactForm";
import FAQSection from "./components/FaqSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"


// ✅ Layout wrapper that includes Navbar + FAQ + Footer everywhere
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full text-slate-900 dark:text-slate-100 flex flex-col">
      <Navbar />
      <Analytics/>
      <main className="flex-grow">{children}</main>
      <FAQSection />
      <Footer />
     
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesCarousel />
      <DetailedServices />
      <Pricing />
      <BlogSection />
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <Post />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}