import { z } from 'zod';

const MessageFormSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
});

type MessageFormType = z.infer<typeof MessageFormSchema>;

export { MessageFormSchema, type MessageFormType };
