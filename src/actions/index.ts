import { defineAction, ActionError } from  "astro:actions";
import{z} from "astro:schema";


const createNewContacto = defineAction({
    input: z.object({
        name: z.string(),
        cargo: z.string(),
        email: z.string().email(), 
       
    }),
    accept: "form",
    handler:({name}) => {
        if (name == null) {
            return new ActionError({
                message:"Name is required",
                code: "BAD_REQUEST"
            })
        }

    console.log("username", name);
    const Message = `Hello ${name},  welcome to Astro Actions!`;
     return Message
    }
   
})

export const server={
    createNewContacto,
}