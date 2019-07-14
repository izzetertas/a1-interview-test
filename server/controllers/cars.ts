import { ICar } from '../types';
import { cars } from '../mocks/cars';
import { Request, Response } from 'express';

const ITEMS_PER_PAGE = 10;

function paginate(collection: Array<ICar> = [], page = 1) {
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  return collection.slice(start, end);
}

function filterByProperty(
  propertyName: 'manufacturerName' | 'color',
  propertyValue: string | null,
  collection: Array<ICar>
) {
  if (propertyValue) {
    return collection.filter(function(item) {
      return item[propertyName].toLowerCase() === propertyValue.toLowerCase();
    });
  }

  return collection;
}

export function getCar(req: Request, res: Response) {
  const { stockNumber } = req.params
  if(!stockNumber) return res.status(404)

  const car = cars.find(function(eachCar) {
    return eachCar.stockNumber == Number(stockNumber[0]);
  })

  if (car) {
    return res.status(201).send(JSON.stringify({ car }));
  } else {
    return res.status(404);
  }
}

export function getCars(req: Request, res: Response) {
  const { page, sort, manufacturer, color} = req.query;
  let filteredCars = cars;
  filteredCars = filterByProperty(
    'manufacturerName',
    manufacturer,
    filteredCars
  );
  filteredCars = filterByProperty('color', color, filteredCars);

  if (sort && ['asc', 'des'].includes(sort)) {
    filteredCars.sort(function(a, b) {
      if (sort === 'asc') {
        return a.mileage.number - b.mileage.number;
      }

      return b.mileage.number - a.mileage.number;
    });
  } else {
    filteredCars.sort(function(a, b) {
      return a.stockNumber - b.stockNumber;
    });
  }

  return res.status(201).send(
    JSON.stringify({
      cars: paginate(filteredCars, Number(page || 1)),
      totalPageCount: Math.ceil(filteredCars.length / ITEMS_PER_PAGE),
      totalCarsCount: filteredCars.length
    })
  );
}
