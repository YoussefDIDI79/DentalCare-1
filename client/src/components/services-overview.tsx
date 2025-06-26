import { Card, CardContent } from "@/components/ui/card";

export default function ServicesOverview() {
  const services = [
    {
      icon: "🦷",
      title: "Soins Généraux",
      description: "Examens, nettoyages, obturations et traitements préventifs"
    },
    {
      icon: "💎",
      title: "Esthétique",
      description: "Blanchiment, facettes et restaurations esthétiques"
    },
    {
      icon: "⚙️",
      title: "Orthodontie",
      description: "Appareils dentaires traditionnels et invisibles"
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Services Principaux</h2>
          <p className="text-medical-gray text-lg">Des soins dentaires complets pour toute la famille</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 text-medical-blue">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-medical-gray">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
