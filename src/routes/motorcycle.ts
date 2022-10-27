import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleModel from '../models/MotorcycleModel';
import MotorcycleService from '../services/Motorcycle';

const route = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

const pathSearchId = '/motorcycles/:id';
const patchNormal = '/motorcycles';

route.post(patchNormal, (req, res) => motorcycleController.create(req, res));
route.get(patchNormal, (req, res) => motorcycleController.read(req, res));
route.get(pathSearchId, (req, res) => motorcycleController.readOne(req, res));
route.put(pathSearchId, (req, res) => motorcycleController.update(req, res));
route.delete(pathSearchId, (req, res) => motorcycleController.delete(req, res));

export default route;