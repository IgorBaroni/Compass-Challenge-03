import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().min(3, "You must provide your email.")
        .email("Provide a valid e-mail."),
    password: z.string().min(3, 'You must provide your password.')
});

export type loginschema = z.infer<typeof loginSchema>;