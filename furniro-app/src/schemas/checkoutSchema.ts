import { z } from 'zod'

export const checkoutSchema = z.object({
    firstName: z.string().min(3, "Provide your first name."),
    lastName: z.string().min(3, "Provide your last name."),
    company: z.string(),
    zipCode: z.string().min(5, "You must provide your zip code."),
    country: z.string().min(4, "You must provide your country / region."),
    streetAddress: z.string().min(5, "You must provide your street address."),
    town: z.string().min(4, "You must provide your town / city."),
    province: z.string().min(2, "You must provide your province."),
    addOn: z.string(),
    totalPrice: z.string(),
    products: z.string(),
    email: z.string().min(3, "You must provide your email.")
        .email("Provide a valid e-mail."),
    checkoutOption: z.enum(['Direct Bank Transfer', 'Cash On Delivery']),
});

export type checkoutschema = z.infer<typeof checkoutSchema>;