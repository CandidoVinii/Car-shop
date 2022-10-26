import { ErrorTypes } from '../errors/catalog';
import { ICar, ICarSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _model: IModel<ICar>;
  private _message = 'Method not implemented.';

  constructor(model: IModel<ICar>) {
    this._model = model;
  }
  public async read(): Promise<ICar[]> {
    const cars = await this._model.read();
    return cars;
  }
  public async  readOne(_id: string): Promise<ICar> {
    const car = await this._model.readOne(_id);
    if(!car) throw new Error(ErrorTypes.EntityNotFound)
    return car;
  }
  public update(_id: string, obj: unknown): Promise<ICar> {
    const parsed = ICarSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    this._model.update(_id, parsed.data);
    throw new Error(this._message);
  }
  public delete(_id: string): Promise<ICar> {
    this._model.delete(_id);
    throw new Error();
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = ICarSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._model.create(parsed.data);
  }
}

export default CarService;