import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: "🦷",
      title: "Blanchiment des Dents",
      description: "Blanchiment professionnel pour un sourire éclatant",
      price: "À partir de 800 DH"
    },
    {
      icon: "⚡",
      title: "Orthodontie",
      description: "Correction des malpositions dentaires",
      price: "À partir de 12000 DH"
    },
    {
      icon: "🌱",
      title: "Implants Dentaires",
      description: "Remplacement permanent des dents manquantes",
      price: "À partir de 8000 DH"
    },
    {
      icon: "❤️",
      title: "Soins Parodontaux",
      description: "Traitement des maladies des gencives",
      price: "À partir de 500 DH"
    },
    {
      icon: "✨",
      title: "Nettoyage Dentaire",
      description: "Détartrage et polissage professionnel",
      price: "À partir de 300 DH"
    },
    {
      icon: "👶",
      title: "Dentisterie Pédiatrique",
      description: "Soins adaptés aux enfants",
      price: "À partir de 200 DH"
    }
  ];

  return (
    <section id="services" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Services</h2>
          <p className="text-medical-gray text-lg">Une gamme complète de soins dentaires</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-4 text-medical-blue">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-medical-gray mb-4">{service.description}</p>
                <span className="text-medical-blue font-semibold">{service.price}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
