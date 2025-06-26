import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Simple appointment schema
const appointmentSchema = z.object({
  fullName: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  service: z.string().min(1),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  message: z.string().optional()
});

// In-memory storage (resets on each cold start)
let appointments: Array<{
  id: number;
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  createdAt: Date;
}> = [];

let currentId = 1;

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const data = appointmentSchema.parse(req.body);
      
      const appointment = {
        id: currentId++,
        ...data,
        createdAt: new Date()
      };
      
      appointments.push(appointment);
      
      console.log('New appointment:', appointment);
      
      return res.status(200).json({
        success: true,
        message: "Votre demande de rendez-vous a été envoyée. Nous vous contacterons bientôt.",
        appointment
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Données invalides",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "Erreur serveur. Veuillez réessayer."
      });
    }
  }

  if (req.method === 'GET') {
    return res.status(200).json(appointments);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}