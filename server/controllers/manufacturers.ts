import { manufacturers } from '../mocks/manufacturers';
import { Request, Response } from 'express';

export function getManufacturers(req: Request, res: Response) {
  return res.status(201).send(JSON.stringify({ manufacturers }));
}
