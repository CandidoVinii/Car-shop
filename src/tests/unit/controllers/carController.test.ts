import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { Request, Response } from 'express';
import { carMock, carMockWithId } from '../services/carService.test';
const { expect } = chai;

describe('Car controller', () => {
  const modelCar = new CarModel();
  const serviceCar = new CarService(modelCar);
  const controllerCar = new CarController(serviceCar);
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach( async ()=>{
    sinon.restore();
  })

  describe('create a new car ', async () => {
    beforeEach(async () => {
      sinon.stub(serviceCar, 'create').resolves(carMockWithId);
    });
    it('api response', async () => {
      req.body = carMock;
      await controllerCar.create(req, res);
      const statStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      expect(statStub.calledOnce).to.be.true;
      expect(statStub.calledWith(201)).to.be.true;
      expect(jsonStub.calledOnce).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    })
  });

  describe('list all cars', async () => {
    beforeEach(async () => {
      sinon.stub(serviceCar, 'read').resolves([carMockWithId]);
    });
    it('api response', async () => {
      await controllerCar.read(req, res);
      const statStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      expect(statStub.calledOnce).to.be.true;
      expect(statStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledOnce).to.be.true;
      expect(jsonStub.calledWith([carMockWithId])).to.be.true;
    })
  });

  describe('get a car', async () => {
    beforeEach(async () => {
      sinon.stub(serviceCar, 'readOne').resolves(carMockWithId);
    });
    it('api response', async () => {
      req.params = { id: carMockWithId._id };
      await controllerCar.readOne(req, res);
      const statStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      expect(statStub.calledOnce).to.be.true;
      expect(statStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledOnce).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    })
  });

  describe('delete a car', async () => {
    beforeEach(async () => {
      sinon.stub(serviceCar, 'delete').resolves(carMockWithId);
    });
    it('api response', async () => {
      req.params = { id: carMockWithId._id };
      await controllerCar.delete(req, res);
      const statStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      expect(statStub.calledOnce).to.be.true;
      expect(statStub.calledWith(204)).to.be.true;
      expect(jsonStub.calledOnce).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    })
  });

});