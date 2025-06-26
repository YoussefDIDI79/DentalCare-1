import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez prendre rendez-vous en ligne via notre formulaire, par téléphone ou en visitant directement la clinique."
    },
    {
      question: "Acceptez-vous les assurances ?",
      answer: "Oui, nous acceptons la plupart des assurances médicales. Contactez-nous pour vérifier votre couverture."
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Lundi à Vendredi : 9h00 - 18h00, Samedi : 9h00 - 13h00, Dimanche : Fermé"
    },
    {
      question: "Proposez-vous des soins d'urgence ?",
      answer: "Oui, nous acceptons les urgences dentaires. Contactez-nous immédiatement pour les cas urgents."
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Nous acceptons les espèces, cartes bancaires, virements et la plupart des assurances médicales."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions Fréquentes</h2>
          <p className="text-medical-gray text-lg">Trouvez des réponses à vos questions</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:text-medical-blue transition-colors flex justify-between items-center"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-medical-gray">
                    {faq.answer}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
