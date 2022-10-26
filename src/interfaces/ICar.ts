import { z } from 'zod';
import { IVehicleSchema } from './IVehicle';

const ICarSchema = IVehicleSchema.extend({
  doorsQty: z
    .number({
      required_error: 'Buy value is required',
      invalid_type_error: 'Buy value must be a number',
    })
    .int({ message: 'buy value must be a integer' })
    .gte(2, { message: 'number must be greater than or equal to 2' })
    .lte(4, { message: 'number must be less than or equal to 4' }),
  seatsQty: z
    .number({
      required_error: 'Buy value is required',
      invalid_type_error: 'Buy value must be a number',
    })
    .gte(2, { message: 'number must be greater than or equal to 2' })
    .lte(7, { message: 'number must be less than or equal to 7' }),
});

type ICar = z.infer<typeof ICarSchema>;

export { ICar, ICarSchema };