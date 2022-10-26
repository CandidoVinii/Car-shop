import { z } from 'zod';

const IVehicleSchema = z.object({
  model: z
    .string({
      required_error: 'Model is required',
      invalid_type_error: 'Model must be a string',
    })
    .min(3, { message: 'Must be 3 or more characters long' }),
  year: z
    .number({
      required_error: 'Year is required',
      invalid_type_error: 'Year must be a number',
    })
    .int({ message: 'buy value must be a integer' })
    .gte(1900, { message: 'that date is very distant' })
    .lte(2022, { message: 'that date is very distant' }),
  color: z
    .string({
      required_error: 'Color is required',
      invalid_type_error: 'Color must be a string',
    })
    .min(3, { message: 'Must be 3 or more characters long' }),
  status: z
    .boolean({ invalid_type_error: 'status must be a boolean' })
    .optional(),
  buyValue: z
    .number({
      required_error: 'Buy value is required',
      invalid_type_error: 'Buy value must be a number',
    })
    .int({ message: 'Buy value must be a integer' }),
}); 

type IVehicle = z.infer<typeof IVehicleSchema>;

export { IVehicle, IVehicleSchema };