import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Simple contact schema
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1)
});

// In-memory storage (resets on each cold start)
let messages: Array<{
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
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
      const data = contactSchema.parse(req.body);
      
      const contactMessage = {
        id: currentId++,
        ...data,
        createdAt: new Date()
      };
      
      messages.push(contactMessage);
      
      console.log('New contact message:', contactMessage);
      
      return res.status(200).json({
        success: true,
        message: "Votre message a été envoyé. Nous vous répondrons bientôt.",
        contactMessage
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
    return res.status(200).json(messages);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}