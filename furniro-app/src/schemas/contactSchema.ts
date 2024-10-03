import { z } from 'zod'

export const contactSchema = z.object({
    name: z.string().min(3, "You must provide your name."),
    email: z.string().min(3, "You must provide your email.")
        .email("Provide a valid e-mail."),
    message: z.string().min(3, 'You must provide your message.'),
    subject: z.string()
});

export type contactschema = z.infer<typeof contactSchema>;