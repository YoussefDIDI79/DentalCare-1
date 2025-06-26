import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import AppointmentBooking from "@/components/appointment-booking";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsappWidget from "@/components/whatsapp-widget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <AppointmentBooking />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsappWidget />
    </div>
  );
}
