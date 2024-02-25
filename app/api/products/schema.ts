import {z} from 'zod';

// define the shape of valid product obj
const schema = z.object({
  name: z.string().min(3),
  price: z.number().min(1).max(100),
});

export default schema;