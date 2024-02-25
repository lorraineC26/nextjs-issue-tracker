import {z} from 'zod';

// define the user object and use zod to validate objects
const schema =  z.object({
  name: z.string().min(3), // name with a min length of 3
  // email: z.string().email(),
  // age: z.number()
})

export default schema;