import { defineAction, ActionError } from  "astro:actions";
import{z} from "astro:schema";


const createNewContacto = defineAction({
    input: z.object({
        name: z.string(),
        cargo: z.string(),
        email: z.string().email(), 
        select: z.array(z.string()).default(['Servicio Mapache']),
        comentarios: z.string().optional()

       
    }),
    accept: "form",
    handler:({name,cargo,email,select,comentarios}) => {
        if (name == null) {
            return new ActionError({
                message:"Name is required",
                code: "BAD_REQUEST"
            }
        )
        }
        if (cargo == null) {
            return new ActionError({
                message:"cargo is required",
                code: "BAD_REQUEST"
            }
        )
        }
        if ( email== null) {
            return new ActionError({
                message:"email is required",
                code: "BAD_REQUEST"
            }
        )
        }

    console.log("name", name, "cargo", cargo, "email", email, "select", select, "comentarios", comentarios);
    const Message = `Hello ${name}, welcome to Astro Actions! con el cargo ${cargo} y el correo ${email} que necesitas para ${select.join(", ")}. Comentarios: ${comentarios || "Ninguno"}.`;
     return Message
    }
   
})

export const server={
    createNewContacto,
}