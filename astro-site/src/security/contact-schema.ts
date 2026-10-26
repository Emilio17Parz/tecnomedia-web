import { z } from 'astro/zod';

export const contactSchema = z.object({
  nombre: z.string().trim().min(2).max(100),
  empresa: z.string().trim().max(150).optional().default(''),
  correo: z.string().trim().email().max(254),
  telefono: z.string().trim().max(30).optional().default(''),
  interes: z.enum(['DevSecOps', 'Observabilidad', 'Ciberseguridad', 'Otro']),
  comentarios: z.string().trim().min(10).max(3000),
  website: z.string().max(0).optional().default(''),
});

export type ContactInput = z.infer<typeof contactSchema>;
