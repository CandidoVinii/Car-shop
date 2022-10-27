import { IModel } from "../interfaces/IModel";
import { IMotorcycle, IMotorcycleSchema } from "../interfaces/IMotorcycle";
import IService from "../interfaces/IService";

class MotorcycleService implements IService<IMotorcycle> {
  private _model: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._model = model;
  }
  read(): Promise<{ status?: boolean | undefined; model: string; year: number; color: string; buyValue: number; category: "Street" | "Custom" | "Trail"; engineCapacity: number; }[]> {
    throw new Error("Method not implemented.");
  }
  readOne(_id: string): Promise<{ status?: boolean | undefined; model: string; year: number; color: string; buyValue: number; category: "Street" | "Custom" | "Trail"; engineCapacity: number; }> {
    throw new Error("Method not implemented.");
  }
  update(_id: string, obj: unknown): Promise<{ status?: boolean | undefined; model: string; year: number; color: string; buyValue: number; category: "Street" | "Custom" | "Trail"; engineCapacity: number; }> {
    throw new Error("Method not implemented.");
  }
  delete(_id: string): Promise<{ status?: boolean | undefined; model: string; year: number; color: string; buyValue: number; category: "Street" | "Custom" | "Trail"; engineCapacity: number; } | null> {
    throw new Error("Method not implemented.");
  }

  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = IMotorcycleSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._model.create(parsed.data);
  }

}

export default MotorcycleService