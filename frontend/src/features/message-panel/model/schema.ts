import { z } from 'zod';

const MessageFormSchema = z.object({
  message: z.string().max(100),
});

type MessageFormType = z.infer<typeof MessageFormSchema>;

export { MessageFormSchema, type MessageFormType };
