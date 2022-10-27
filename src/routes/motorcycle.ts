import { Router } from "express";
import MotorcycleController from "../controllers/Motorcycle";
import MotorcycleModel from "../models/MotorcycleModel";
import MotorcycleService from "../services/Motorcycle";

const route = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

route.post('/motorcycles', (req, res) => motorcycleController.create(req, res));

export default route;