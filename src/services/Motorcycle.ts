import { IModel } from "../interfaces/IModel";
import { IMotorcycle, IMotorcycleSchema } from "../interfaces/IMotorcycle";
import IService from "../interfaces/IService";

class MotorcycleService implements IService<IMotorcycle> {
  private _model: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._model = model;
  }

  public async read(): Promise<IMotorcycle[]> {
    const cars = await this._model.read();
    return cars;
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