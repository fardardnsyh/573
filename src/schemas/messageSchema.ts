import { z } from "zod"


export const messageSchema = z.object({
    content: z
        .string()
        .min(1, "Field cannot be empty")
        .max(300, "Message should not be longer than 300 characters")

})