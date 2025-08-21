// src/lib/api/value.ts
import type { Contacto } from "@/lib/types/contacto";

export async function createNewContacto(data: Contacto, email: string) {
  const response = await fetch("https://tu-backend.com/api/contacto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Email": email, // si tu API necesita este header
    },
    body: JSON.stringify(data),
  });

  return {
    status: response.status,
    data: await response.json().catch(() => ({})),
  };
}
