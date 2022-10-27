import { IMotorcycle } from "../interfaces/IMotorcycle";
import { Request, Response } from 'express';
import IService from "../interfaces/IService";

class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) {}

  public async read(
    _req: Request,
    res: Response<IMotorcycle[]>
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>
  ) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return result;
  }
  public async create(
    req: Request,
    res: Response<IMotorcycle>
  ) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }
}

export default MotorcycleController;