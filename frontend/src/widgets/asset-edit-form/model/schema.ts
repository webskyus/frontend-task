import { z } from 'zod';

const AssetEditFormSchema = z.object({
  soundUrl: z
    .string()
    .min(12)
    .max(100)
    .regex(/^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/, 'Invalid URL'),
  caption: z.string().min(4).max(200),
});

type AssetEditFormType = z.infer<typeof AssetEditFormSchema>;

export { AssetEditFormSchema, type AssetEditFormType };
