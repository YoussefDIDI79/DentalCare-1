import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      info: "Avenue Mohammed V, Khénifra 54000"
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "+212 5 35 XX XX XX"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@clinique-hanouni.ma"
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "Lun-Ven: 9h-18h, Sam: 9h-13h"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nous Contacter</h2>
          <p className="text-medical-gray text-lg">Trouvez-nous et restons en contact</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informations de Contact</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon className="w-6 h-6 text-medical-blue mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-medical-gray">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-medical-blue text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-medical-blue text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-medical-blue text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Localisation</h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-medical-gray">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Google Maps</p>
                <p className="text-sm">Avenue Mohammed V, Khénifra</p>
                <p className="text-xs mt-2 text-gray-500">
                  Intégration Google Maps à venir
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
