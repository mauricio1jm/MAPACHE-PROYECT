import type { Contacto } from "../types/contacto";

const URI = "http://localhost:8000";

// Función para crear un nuevo contacto
export const createNewContacto = async (contacto: Contacto) => {
  const response = await fetch(`${URI}/contacto`, {  // o /user si es tu endpoint
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contacto)
  });

  return response.json(); // Devuelve lo que el backend responda
};
