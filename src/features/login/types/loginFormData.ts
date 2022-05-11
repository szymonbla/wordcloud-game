import { z } from 'zod';
import { errors } from 'common/constants';

export const loginFormSchema = z.object({
  nickname: z
    .string()
    .min(3, { message: `${errors.minLength} 3 characters` })
    .nonempty(errors.required)
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
