import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Appointment booking endpoint
  app.post("/api/appointments", async (req, res) => {
    try {
      const appointmentData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(appointmentData);
      
      // Send email notification (in a real app, you'd use nodemailer here)
      console.log("New appointment request:", appointment);
      
      res.json({ 
        success: true, 
        message: "Votre demande de rendez-vous a été envoyée. Nous vous contacterons bientôt.",
        appointment 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Données invalides", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erreur serveur. Veuillez réessayer." 
        });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(contactData);
      
      // Send email notification (in a real app, you'd use nodemailer here)
      console.log("New contact message:", message);
      
      res.json({ 
        success: true, 
        message: "Votre message a été envoyé. Nous vous répondrons bientôt.",
        contactMessage: message 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Données invalides", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erreur serveur. Veuillez réessayer." 
        });
      }
    }
  });

  // Get appointments (admin endpoint)
  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erreur serveur" 
      });
    }
  });

  // Get contact messages (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erreur serveur" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
