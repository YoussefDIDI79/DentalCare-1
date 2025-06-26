export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-medical-blue text-2xl mr-3">🦷</div>
              <span className="text-xl font-bold">Dr. Hanouni</span>
            </div>
            <p className="text-gray-300">
              Clinique dentaire moderne offrant des soins de qualité à Khénifra.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Soins généraux</li>
              <li>Orthodontie</li>
              <li>Implants dentaires</li>
              <li>Blanchiment</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("#accueil")}
                  className="hover:text-medical-blue transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#apropos")}
                  className="hover:text-medical-blue transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#services")}
                  className="hover:text-medical-blue transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="hover:text-medical-blue transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Avenue Mohammed V</p>
              <p>Khénifra 54000</p>
              <p>+212 5 35 XX XX XX</p>
              <p>contact@clinique-hanouni.ma</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Clinique Dr. Hanouni. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
