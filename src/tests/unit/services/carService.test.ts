import * as sinon from 'sinon';
import chai from 'chai';
import { ICar } from '../../../interfaces/ICar';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/Car';
import { ZodError } from 'zod';
const { expect } = chai;

export const carMock: ICar = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
};

export const carMockWithId: ICar & { _id: string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

describe('Car service', () => {
  const modelCar = new CarModel();
  const serviceCar = new CarService(modelCar);

  before(async () => {
    sinon.stub(modelCar, 'create').resolves(carMockWithId);
    sinon.stub(modelCar, 'read').resolves([carMockWithId]);
    sinon
      .stub(modelCar, 'readOne')
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .resolves(null);
    sinon
      .stub(modelCar, 'update')
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .resolves(null);
    sinon
      .stub(modelCar, 'delete')
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .resolves(null);
  });

  after(async ()=>{
    sinon.restore();
  });

  it('creating car in db', async () => {
    const car = await serviceCar.create(carMock);
    expect(car).to.be.deep.equal(carMockWithId);
  });

  it('zod erro in creating car in db', async () => {
    let error;
    try {
      await serviceCar.create({});
    } catch (err) {
      error = err;
    }
    expect(error).to.be.instanceOf(ZodError);
  });

  it('get all cars create in db', async () => {
    const cars = await serviceCar.read();
    expect(cars).to.be.deep.eq([carMockWithId]);
  });

  it('get car by id', async () => {
    const car = await serviceCar.readOne(carMockWithId._id);
    expect(car).to.be.deep.eq(carMockWithId);
  });

});