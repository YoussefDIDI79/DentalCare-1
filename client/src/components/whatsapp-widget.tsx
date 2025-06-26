import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsappWidget() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "+212600000000"; // Update with real number
    const message = "Bonjour, j'aimerais prendre rendez-vous à la clinique Dr. Hanouni.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Contacter sur WhatsApp</span>
      </Button>
    </div>
  );
}
