import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, IdCard, Users } from "lucide-react";

export default function AboutSection() {
  const credentials = [
    {
      icon: GraduationCap,
      text: "Diplômé de la Faculté de Médecine Dentaire de Rabat"
    },
    {
      icon: Award,
      text: "15 ans d'expérience en dentisterie générale et esthétique"
    },
    {
      icon: IdCard,
      text: "Spécialisation en implantologie et parodontologie"
    },
    {
      icon: Users,
      text: "Plus de 3000 patients satisfaits"
    }
  ];

  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Dr. Hanouni, dentiste professionnel" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dr. Hanouni</h2>
            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center text-medical-gray">
                  <credential.icon className="w-5 h-5 text-medical-blue mr-3" />
                  <p>{credential.text}</p>
                </div>
              ))}
            </div>
            <Card className="bg-light-blue border-none">
              <CardContent className="p-6">
                <p className="text-medical-blue italic">
                  "Mon objectif est de vous offrir les meilleurs soins dentaires dans un environnement confortable et rassurant. Votre santé bucco-dentaire est ma priorité."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
