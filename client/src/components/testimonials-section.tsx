import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      initial: "A",
      name: "Aicha M.",
      text: "Excellent service et équipe très professionnelle. Dr. Hanouni a pris soin de ma famille depuis 3 ans."
    },
    {
      initial: "M",
      name: "Mohamed K.",
      text: "Clinique moderne avec des équipements de pointe. Les soins sont de très haute qualité."
    },
    {
      initial: "F",
      name: "Fatima B.",
      text: "Très satisfaite de mon traitement orthodontique. Résultats remarquables et suivi impeccable."
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Témoignages</h2>
          <p className="text-medical-gray text-lg">Ce que nos patients disent de nous</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-medical-gray italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
