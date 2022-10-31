import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId } from '../services/carService.test';
const { expect } = chai;


describe('Car Model ', () => {
  const modelCar = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('create a car', async () => {
    const newCar = await modelCar.create(carMock);
    expect(newCar).to.be.deep.eq(carMockWithId);
  });

  it('get all cars', async () => {
    const cars = await modelCar.read();
    expect(cars).to.be.deep.eq([carMockWithId]);
  });

  it('get one cars', async () => {
    const cars = await modelCar.readOne(carMockWithId._id);
    expect(cars).to.be.deep.eq(carMockWithId);
  });
});