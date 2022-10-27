import { ErrorTypes } from "../errors/catalog";
import { IModel } from "../interfaces/IModel";
import { IMotorcycle, IMotorcycleSchema } from "../interfaces/IMotorcycle";
import IService from "../interfaces/IService";

class MotorcycleService implements IService<IMotorcycle> {
  private _model: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._model = model;
  }

  public async read(): Promise<IMotorcycle[]> {
    const motorcycles = await this._model.read();
    return motorcycles;
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const motorcycle = await this._model.readOne(_id);
    if (!motorcycle) throw Error(ErrorTypes.EntityNotFound);
    return motorcycle;
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