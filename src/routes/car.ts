import { Router } from 'express';
import CarController from '../controllers/Car';
import CarModel from '../models/CarModel';
import CarService from '../services/Car';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

const pathSearchId = '/cars/:id'
const patchNormal = '/cars'

route.post(patchNormal, (req, res) => carController.create(req, res));
route.get(patchNormal, (req, res) => carController.read(req, res));
route.get(pathSearchId, (req, res) => carController.readOne(req, res));
route.put(pathSearchId, (req, res) => carController.update(req, res));
route.delete(pathSearchId, (req, res) => carController.delete(req, res));

export default route;
