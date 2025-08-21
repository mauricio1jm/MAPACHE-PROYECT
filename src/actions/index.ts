import { defineAction } from "astro:actions";
import { z } from "zod";

export const server = {
  SaveFormAction: defineAction({
    accept: "form", 
    input: z.object({
      nombre: z.string().min(3, "El nombre es obligatorio"),
      cargo: z.string().min(2, "El cargo es obligatorio"),
      correo: z.string().email("Correo inválido"),
      servicios: z.string(),
      comentarios: z.string().optional(),
    }),
    handler: async ({ nombre, cargo, correo, servicios, comentarios }) => {
      console.log("Nuevo registro (form):", { nombre, cargo, correo, servicios, comentarios });

      return { success: true };
    },
  }),
};