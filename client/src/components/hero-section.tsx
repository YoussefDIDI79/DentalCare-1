import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="bg-gradient-to-br from-medical-blue to-blue-700 hero-pattern pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Votre sourire, notre priorité
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Clinique dentaire moderne à Khénifra, offrant des soins dentaires de qualité avec les dernières technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("#rendez-vous")}
                className="bg-white text-medical-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Button>
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-medical-blue px-8 py-3 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Nous contacter
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Clinique dentaire moderne" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
