import { z } from 'zod';
import { IVehicleSchema } from './IVehicle';

const IMotorcycleSchema = IVehicleSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().lte(2500),
});

type IMotorcycle = z.infer<typeof IMotorcycleSchema>;

export { IMotorcycleSchema, IMotorcycle };